export async function getProjects() {
  // Fetch or generate the list of projects
  return [
    { name: 'Planetaria', description: 'Creating technology to empower civilians to explore space on their own terms.', link: { href: 'http://planetaria.tech', label: 'planetaria.tech' }, logo: '/images/logos/planetaria.svg' },
    { name: 'Animaginary', description: 'High performance web animation library, hand-written in optimized WASM.', link: { href: '#', label: 'github.com' }, logo: '/images/logos/animaginary.svg' },
    { name: 'HelioStream', description: 'Real-time video streaming library, optimized for interstellar transmission.', link: { href: '#', label: 'github.com' }, logo: '/images/logos/helio-stream.svg' },
    { name: 'cosmOS', description: 'The operating system that powers our Planetaria space shuttles.', link: { href: '#', label: 'github.com' }, logo: '/images/logos/cosmos.svg' },
    { name: 'OpenShuttle', description: 'The schematics for the first rocket I designed that successfully made it to orbit.', link: { href: '#', label: 'github.com' }, logo: '/images/logos/open-shuttle.svg' },
  ]
}
