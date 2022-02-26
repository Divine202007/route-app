import React from 'react';
import './Style.css';
import './Style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage1 from './Img/movie1.jpg';
import myImage2 from './Img/movie2.jpg';
import myImage3 from './Img/movie3.jpg';
import myImage4 from './Img/movie4.jpg';
import myImage5 from './Img/movie5.jpg';
import myImage6 from './Img/movie6.jpg';
import myImage7 from './Img/movie7.jpg';
import myImage8 from './Img/movie8.jpg';
import StarRating from './components/StarRating';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';



const datalist = [
  {
      id: 1,
      title: "RED NOTICE",
      link: "https://www.youtube.com/watch?v=OR5do7HwzOA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar vitae enim id pulvinar. Phasellus euismod pretium libero, eu vestibulum lacus porta quis. Donec velit risus, ullamcorper non eros sed, hendrerit iaculis dolor. Curabitur euismod suscipit neque, ac elementum tortor elementum vitae. Aenean pretium posuere vestibulum. Nam nisl metus, ullamcorper et lobortis ut, mollis vitae erat. Fusce sed mauris porttitor, vehicula lorem in, vulputate nunc.",
      posterURL: myImage1,
      rate: <StarRating/>
  },
  {
      id: 2,
      title: "BOOM",
      link: "https://www.youtube.com/watch?v=1ISy4fZewrg&t=1s",
      description: "Quisque ultrices aliquet velit, non porta justo porttitor vitae. Cras nisl arcu, pharetra quis metus in, pharetra cursus arcu. In eu iaculis lorem. Vivamus ultricies, dui eu pellentesque scelerisque, sapien arcu vulputate justo, vitae venenatis metus libero nec magna. Maecenas quis mi a massa vehicula dignissim. Phasellus tortor velit, consectetur ut velit tristique, tristique posuere mi. Pellentesque consequat erat eget blandit posuere. Integer et mi diam. Fusce nec pretium odio. Pellentesque ut felis neque. Sed ullamcorper massa ut velit aliquam finibus. Pellentesque eu diam a nibh dapibus malesuada. Aliquam sit amet magna rhoncus, molestie lacus at, tempor enim. Aenean vel cursus enim. Phasellus id mauris eget leo dapibus dapibus.",
      posterURL: myImage2,
      rate: <StarRating/>
  },
  {
      id: 3,
      title: "SWEET GIRL",
      link: "https://www.youtube.com/watch?v=xK0Wp6hQVo4&t=10s",
      description: "Aliquam massa turpis, ultrices eu velit in, tempus sollicitudin nibh. In id gravida erat. Fusce efficitur egestas luctus. Sed enim tortor, dictum id lorem sed, ultrices eleifend ex. Morbi tempor elit mattis semper gravida. Sed eget lacinia elit, et blandit justo. Mauris ex diam, iaculis eu sem ut, tristique ornare ligula. Nunc massa ipsum, euismod vitae tortor eu, iaculis venenatis lectus. Vivamus hendrerit risus nec ligula congue, at tincidunt risus elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vehicula tristique mi sed sagittis. Donec placerat eros nisl, ut fermentum dolor facilisis ut.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: myImage3,
      rate: <StarRating/>
  },
  {
      id: 4,
      title: "NIGTH TEETH",
      link: "https://www.youtube.com/watch?v=U58UJmaHLJA&t=34s",
      description: "Aliquam aliquet placerat sem et molestie. Quisque elit dolor, pretium eu mollis gravida, facilisis tincidunt massa. Fusce quis diam nibh. Sed aliquam pellentesque tortor eget ornare. Donec non ligula ligula. Etiam neque justo, egestas nec odio sed, pharetra malesuada felis. Integer non gravida purus, sit amet venenatis odio. Sed egestas aliquam vehicula. Nullam finibus, nibh in placerat laoreet, mauris est cursus purus, et venenatis magna lorem in metus. Cras in elit id felis eleifend condimentum. Sed arcu quam, molestie vitae gravida eget, sodales sit amet arcu. Suspendisse ligula libero, pellentesque vitae sapien id, condimentum dignissim magna. Integer ultricies, lorem sed porta dignissim, sapien quam sollicitudin lorem, vitae rutrum augue sem vitae enim. Vestibulum sed scelerisque sem, vel pharetra purus. Nam sit amet enim urna.",
      posterURL: myImage4,
      rate: <StarRating/>
  },
  {
      id: 5,
      title: "LAST MERCENARY",
      link: "https://www.youtube.com/watch?v=LGMX3Tb3F4k&t=23s",
      description: "Vivamus nibh arcu, tincidunt sed mi id, tincidunt blandit lacus. Vivamus facilisis, leo sit amet ultrices porta, est turpis pulvinar orci, a sollicitudin purus ipsum at erat. Donec convallis massa quis felis laoreet, tincidunt aliquet odio viverra. Nam scelerisque lorem lectus, dignissim efficitur augue venenatis in. Etiam ultricies nec tortor eget pulvinar. Suspendisse justo urna, porttitor hendrerit est sit amet, aliquam viverra lorem. Nunc auctor diam aliquet sem ultrices dapibus. Mauris eu luctus arcu. Integer dignissim aliquet mi a ultricies. Sed venenatis varius dolor vel pulvinar. Vestibulum a massa vestibulum, vulputate enim eu, consectetur quam. Pellentesque eros lorem, pellentesque quis lacinia sit amet, tincidunt sed sapien.",
      posterURL: myImage5,
      rate: <StarRating/>
  },
  {
    id: 6,
    title: "FRIENDZONE",
    link: "https://www.youtube.com/watch?v=9QL07ep7HA0",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
    posterURL: myImage6,
    rate: <StarRating/>
  },
  {
    id: 7,
    title: "THE UNFORGIVABLE",
    link: "https://www.youtube.com/watch?v=2VS7MdbxueM",
    description: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    posterURL: myImage7,
    rate: <StarRating/>
  },
  {
    id: 8,
    title: "FATHERHOOD",
    link: "https://www.youtube.com/watch?v=eqEJo34OmkQ",
    description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
    posterURL: myImage8,
    rate: <StarRating/>
  }
];


const App = () => {
  const [movies, setMovies] = useState(datalist);

  return (
    <div className='App'>
      <NavBar />

      <Routes>

        <Route path="/" element = {<MovieList movies={movies} />} />
        <Route path="moviedetails/:id" element = {<MovieDetails movies={movies}/>} />
        <Route path="AddMovie" element = {<AddMovie />} />
    
      </Routes>
    </div>
  );
}

export default App;
