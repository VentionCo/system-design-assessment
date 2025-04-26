import { Listing } from '@/components/Listing/Listing';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export const HomePage = () => {
  return (
    <>
    <ColorSchemeToggle />
      <Welcome />
      <Listing />
    </>
  );
}
