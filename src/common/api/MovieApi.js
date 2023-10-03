import axios from "axios";


/*
This creates an instance of the url so we can use this without using the url
refer for more => https://blog.logrocket.com/understanding-axios-create/#:~:text=It%20is%20more%20advantageous%20to,accept%20header%20of%20application%2Fvnd.
*/
export default axios.create({

    baseURL : "http://www.omdbapi.com/",
});