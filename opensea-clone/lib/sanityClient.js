import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'dlo00xn6',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skUVpqpy5o1ir9bkpKesCSgWspLUzXYs7efq8czGEXaRc4ccUzRaH70Iw902hPvhLJWEqLulfc1SGSeHMijEYJpreOf0NWWgeHtXkfIlqbjxagx9E3mDmH0n5CZOibibEoqUkrQRyRqxZkoNJAuQsqVkWnuNfBTazevsBiXLp0dTBTK6MxxA',
  useCdn: false,
})