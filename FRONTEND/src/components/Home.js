import React, {useState, useEffect, useMemo} from 'react';
import MaterialReactTable from 'material-react-table';
import axiosInstance from './Axios';

const Home = () => {
    const [clubs, setClubs] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    axiosInstance.get(`footballapi/clubs/`).then((res) => {
        setClubs(res.data);
        setLoading(false);
        console.log("clubs",res.data);
        });
    },[]);

    const columns = useMemo(
        () => [
          {
            accessorKey: 'id', //access nested data with dot notation
            header: 'Id',
          },
          {
            accessorKey: 'name',
            header: 'Name',
          },
          {
            accessorKey: 'stadium', //normal accessorKey
            header: 'Stadium',
          },
          {
            accessorKey: 'attendance',
            header: 'Capacity',
          }
        ],
        [],
      );

  return (      
    <div> 
        {loading ? <p>Loading...</p> :

            <MaterialReactTable 
                columns={columns} 
                data={clubs} />
        }
    </div>
    
  )
}

export default Home