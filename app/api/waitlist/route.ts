import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface WaitlistEntry {
  id: string
  name: string
  phone: string
  email?: string
  role: string
  city: string
  message?: string
  timestamp: string
}

const DATA_FILE = path.join(process.cwd(), 'waitlist-data.json')

async function loadWaitlistData(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveWaitlistData(data: WaitlistEntry[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, phone, email, role, city, message, honeypot } = body
    
    // Check honeypot for spam protection
    if (honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }
    
    if (!name || !phone || !role || !city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Basic phone validation for Bangladesh
    const phoneRegex = /^\+880[0-9]{10}$|^[0-9]{11}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid Bangladesh phone number' },
        { status: 400 }
      )
    }
    
    // Email validation if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Please enter a valid email address' },
          { status: 400 }
        )
      }
    }
    
    // Create new entry
    const entry: WaitlistEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim(),
      role: role.trim(),
      city: city.trim(),
      message: message?.trim(),
      timestamp: new Date().toISOString()
    }
    
    // Load existing data and add new entry
    const existingData = await loadWaitlistData()
    existingData.push(entry)
    
    // Save to file
    await saveWaitlistData(existingData)
    
    // In production, you would also send this data to your email service,
    // CRM, or database. For now, we're just storing it locally.
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the waitlist',
        id: entry.id
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve waitlist data (for admin purposes)
export async function GET() {
  try {
    const data = await loadWaitlistData()
    return NextResponse.json({ 
      success: true, 
      count: data.length,
      data: data.map(entry => ({
        ...entry,
        phone: '***' // Mask phone for privacy
      }))
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load data' },
      { status: 500 }
    )
  }
}