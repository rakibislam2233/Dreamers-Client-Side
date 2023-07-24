import axios from 'axios';
import { useEffect, useState } from 'react';

const useSingleCollege = ({id}) => {
    const [singleData, setSingleData] = useState([]);
    useEffect(() => {
      axios.get(`https://dreamslms-server-side.vercel.app/singleCollege/${id}`).then((res) => {
        setSingleData(res.data);
      });
    }, [id]);
    return [singleData]
};
export default useSingleCollege;