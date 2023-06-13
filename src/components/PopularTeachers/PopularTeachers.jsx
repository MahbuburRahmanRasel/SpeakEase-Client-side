import React from 'react';

const PopularTeachers = () => {

    const [sortedClass, setSortedClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sortclass")
      .then((res) => res.json())
      .then((data) => setSortedClass(data));
  }, []);
  
    return (
        <div>
            
        </div>
    );
};

export default PopularTeachers;