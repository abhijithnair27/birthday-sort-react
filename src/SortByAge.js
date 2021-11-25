import axios from 'axios';
import { useEffect , useState} from 'react';


function SortByAge(){
  const [posts, setPosts] = useState([])
  const fetchPosts = async() => {
      const response = await axios('https://mocki.io/v1/1f5f8e4a-01cd-48a2-a036-7c51324717db')
  
      const obj = response.data

      obj.sort(function (a, b) {
            var age1 = new Date(a.dob)
            var age2 = new Date(b.dob)

            if(age1.getFullYear() < age2.getFullYear())
            return -1;

            if(age1.getFullYear() > age2.getFullYear())
            return 1;

            if(age1.getFullYear() === age2.getFullYear()){
                if(age1.getMonth() < age2.getMonth())
                return 1;

                if(age1.getMonth() < age2.getMonth())
                return -1;

                if(age1.getMonth() === age2.getMonth()){
                    if(age1.getDate() < age2.getDate())
                    return 1;

                    if(age1.getDate() < age2.getDate())
                    return -1;

                    return 0;
                }

                return 0;

            }

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

export default SortByAge;