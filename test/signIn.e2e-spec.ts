import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('your e-mail').fill('johndoe@email.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()
  const toast = page.getByText('send a link of authentication to your email..')
  expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('your e-mail').fill('wrong@email.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()
  const toast = page.getByText('credentials invalid.')
  expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'New Established' }).click()
  expect(page.url()).toContain('/sign-up')
})
