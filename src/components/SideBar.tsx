import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface SidebarProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresProps {
  genres: SidebarProps[];
  selectedGenreId: number;
  handleClickButton(id: number): void;
}
export function SideBar( {genres, selectedGenreId, handleClickButton}:GenresProps) {
  // Complete aqui
  return (
    <>
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map( (genre: SidebarProps) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  )
}