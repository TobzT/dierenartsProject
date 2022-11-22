import axios from 'axios';


function postForm(data){
axios.post("localhost:8080/appointement", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
export default postForm;