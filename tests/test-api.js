/**
 * API Testing Script for Trial Transport
 * Run with: node tests/test-api.js
 */

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000'

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

async function testEndpoint(name, method, endpoint, body = null, headers = {}) {
  log(`\n🧪 Testing: ${name}`, 'cyan')
  log(`   ${method} ${endpoint}`, 'blue')
  
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }

    if (body) {
      options.body = JSON.stringify(body)
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options)
    const data = await response.json()

    if (response.ok) {
      log(`   ✅ Success (${response.status})`, 'green')
      log(`   Response: ${JSON.stringify(data, null, 2).substring(0, 200)}...`, 'reset')
      return { success: true, data, status: response.status }
    } else {
      log(`   ❌ Failed (${response.status})`, 'red')
      log(`   Error: ${JSON.stringify(data)}`, 'red')
      return { success: false, data, status: response.status }
    }
  } catch (error) {
    log(`   ❌ Error: ${error.message}`, 'red')
    return { success: false, error: error.message }
  }
}

async function runTests() {
  log('\n🚀 Starting API Tests for Trial Transport', 'yellow')
  log('=' .repeat(60), 'yellow')

  const results = {
    total: 0,
    passed: 0,
    failed: 0
  }

  // Test 1: Health Check
  const health = await testEndpoint(
    'Health Check',
    'GET',
    '/api/health'
  )
  results.total++
  if (health.success) results.passed++
  else results.failed++

  // Test 2: User Registration
  const registration = await testEndpoint(
    'User Registration',
    'POST',
    '/api/users/register',
    {
      email: `test${Date.now()}@example.com`,
      password: 'password123',
      name: 'Test User',
      role: 'SHIPPER',
      companyName: 'Test Company'
    }
  )
  results.total++
  if (registration.success) results.passed++
  else results.failed++

  // Test 3: Get Tracking (Public - should work without auth)
  const tracking = await testEndpoint(
    'Public Tracking',
    'GET',
    '/api/tracking/TT-2025-001'
  )
  results.total++
  if (tracking.success || tracking.status === 404) results.passed++ // 404 is ok if shipment doesn't exist
  else results.failed++

  // Test 4: Create Shipment (will fail without auth - expected)
  const shipment = await testEndpoint(
    'Create Shipment (No Auth - Expected to Fail)',
    'POST',
    '/api/shipments',
    {
      specimenType: 'Blood Samples',
      quantity: 24,
      temperatureReq: '2-8°C',
      priority: 'STANDARD',
      pickupName: 'Test Lab',
      pickupPhone: '(555) 111-2222',
      pickupAddress: '123 Main St',
      pickupCity: 'Nashville',
      pickupState: 'TN',
      pickupZip: '37203',
      pickupDate: new Date(Date.now() + 86400000).toISOString(),
      pickupTimeStart: '09:00',
      pickupTimeEnd: '11:00',
      deliveryName: 'Research Center',
      deliveryPhone: '(555) 333-4444',
      deliveryAddress: '456 Oak Ave',
      deliveryCity: 'Atlanta',
      deliveryState: 'GA',
      deliveryZip: '30322',
      deliveryDate: new Date(Date.now() + 86400000).toISOString(),
      deliveryTimeStart: '14:00',
      deliveryTimeEnd: '16:00'
    }
  )
  results.total++
  if (shipment.status === 401) results.passed++ // Expected to fail without auth
  else results.failed++

  // Test 5: Get Notifications (will fail without auth - expected)
  const notifications = await testEndpoint(
    'Get Notifications (No Auth - Expected to Fail)',
    'GET',
    '/api/notifications'
  )
  results.total++
  if (notifications.status === 401) results.passed++ // Expected to fail
  else results.failed++

  // Test 6: Get Messages (will fail without auth - expected)
  const messages = await testEndpoint(
    'Get Messages (No Auth - Expected to Fail)',
    'GET',
    '/api/messages'
  )
  results.total++
  if (messages.status === 401) results.passed++ // Expected to fail
  else results.failed++

  // Test 7: Create Payment Intent (will fail without auth - expected)
  const payment = await testEndpoint(
    'Create Payment Intent (No Auth - Expected to Fail)',
    'POST',
    '/api/stripe/create-payment-intent',
    {
      amount: 130.00
    }
  )
  results.total++
  if (payment.status === 401) results.passed++ // Expected to fail
  else results.failed++

  // Summary
  log('\n' + '='.repeat(60), 'yellow')
  log('📊 Test Results Summary', 'yellow')
  log('='.repeat(60), 'yellow')
  log(`Total Tests: ${results.total}`, 'blue')
  log(`Passed: ${results.passed}`, 'green')
  log(`Failed: ${results.failed}`, results.failed > 0 ? 'red' : 'green')
  log(`Success Rate: ${((results.passed / results.total) * 100).toFixed(1)}%`, 'cyan')
  log('='.repeat(60), 'yellow')

  if (results.failed === 0) {
    log('\n✅ All tests passed!', 'green')
  } else {
    log('\n⚠️  Some tests failed. Check the output above for details.', 'yellow')
  }

  log('\n💡 Note: Tests requiring authentication are expected to fail with 401.', 'cyan')
  log('   To test authenticated endpoints, use the demo accounts:', 'cyan')
  log('   - shipper@trial.com / password123', 'cyan')
  log('   - driver@trial.com / password123', 'cyan')
  log('   - admin@trial.com / password123', 'cyan')
}

// Run tests
runTests().catch(console.error)