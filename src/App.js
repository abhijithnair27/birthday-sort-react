import axios from 'axios';
import { useEffect , useState} from 'react';



function App(){
  const [posts, setPosts] = useState([])
  const fetchPosts = async() => {
      const response = await axios('https://mocki.io/v1/1f5f8e4a-01cd-48a2-a036-7c51324717db')
      setPosts(response.data)
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
      { posts.map((post, id) => (
           <table border={1} cellPadding={10}>
            <tbody>
              <tr>
              <td>{post.name}</td>
              <td>{post.dob}</td>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  );
}

export default App;