import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Establishment Name').fill('Pizza Shop')
  await page.getByLabel('your name').fill('john Doe')
  await page.getByLabel('your e-mail').fill('johndoe@email.com')
  await page.getByLabel('your phone').fill('12233444564674')
  await page.getByRole('button', { name: 'finish register' }).click()
  const toast = page.getByText('restaurant successfully registered!')
  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Establishment Name').fill('Invalid Name')
  await page.getByLabel('your name').fill('john Doe')
  await page.getByLabel('your e-mail').fill('johndoe@email.com')
  await page.getByLabel('your phone').fill('12233444564674')
  await page.getByRole('button', { name: 'finish register' }).click()
  const toast = page.getByText('error when registering restaurant.')
  await expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'make login' }).click()
  expect(page.url()).toContain('/sign-in')
})
