import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface ContactEntry {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
}

const DATA_FILE = path.join(process.cwd(), 'contact-data.json')

async function loadContactData(): Promise<ContactEntry[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveContactData(data: ContactEntry[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, subject, message } = body
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    
    // Message length validation
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }
    
    // Create new entry
    const entry: ContactEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    }
    
    // Load existing data and add new entry
    const existingData = await loadContactData()
    existingData.push(entry)
    
    // Save to file
    await saveContactData(existingData)
    
    // In production, you would also send this data to your email service
    // For now, we're just storing it locally
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully. We\'ll get back to you soon!',
        id: entry.id
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}