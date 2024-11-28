import React, { useEffect, useState } from 'react';
import axios from axios;

function Account({ token }) {
    const [user, setUser] = useState(null);
    const [businesses, setBusinesses] = useState({});
    useEffect(() => {
        axios('ENDPOINT', {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
            console.log(data);
            setBusinesses(data.data.businesses);
        })
        .catch((err) => console.log(err));
    }, [token]);

    const handleReturnBusiness = async (id) => {
        try {
            const result = await axios.delete(
                'ENDPOINT',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (result.data.deleteReview) {
                const businessData = await axios(
                    'ENDPOINT',
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setBusinesses(businessData.data.businesses);
            }
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div>
      <h2>My Account</h2>
      <p>
        {user?.firstname} {user?.lastname}
      </p>
      <p>{user?.email}</p>
      {books.map((book) => (
        <div
          className="biz-card"
          key={business.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>{business.title}</h2>
          <img src={business.coverimage} alt={business.title} />
          <button onClick={() => handleReturnBusiness(business.id)}>Return Business</button>
        </div>
      ))}
    </div>
  );
}

export default Account