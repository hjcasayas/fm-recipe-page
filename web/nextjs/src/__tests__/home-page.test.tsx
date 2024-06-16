import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

test('Page', async () => {
  render(<Page />)
  const searchForRecipeInput = await screen.findByPlaceholderText('Search for recipes');
  expect(searchForRecipeInput).toBeDefined();
})
