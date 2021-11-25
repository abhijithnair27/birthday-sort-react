import axios from 'axios';
import { useEffect , useState} from 'react';


function SortByName(){
  const [posts, setPosts] = useState([])
  const fetchPosts = async() => {
      const response = await axios('https://mocki.io/v1/1f5f8e4a-01cd-48a2-a036-7c51324717db')
  
      const obj = response.data

      obj.sort(function (a, b) {
          if(a.name.toLowerCase() < b.name.toLowerCase())
          return -1;

          if(a.name.toLowerCase() > b.name.toLowerCase())
          return 1;

          return 0;
      });

      setPosts(obj)
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className = "App">
      <table border={1} cellPadding={5}>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Date of Birth</td>
                  </tr>
                </thead>
      </table>
           <table border={1} cellPadding={10}>
            <tbody>
            { posts.map((post, id) => (
              <tr key = {id}>
              <td>{post.name}</td>
              <td>{post.dob}</td>
              </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
}

export default SortByName;