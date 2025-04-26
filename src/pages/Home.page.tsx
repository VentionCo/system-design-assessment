import { Listing } from '@/components/Listing/Listing';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
    <ColorSchemeToggle />
      <Welcome />
      <Listing />
    </>
  );
}
