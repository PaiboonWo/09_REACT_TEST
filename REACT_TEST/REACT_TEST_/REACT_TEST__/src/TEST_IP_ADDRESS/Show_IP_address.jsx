// import React, { useState } from 'react';

// function Show_IP_address() {
//   const [message, setMessage] = useState('');
//   const handleClick = () => {
//     const ipAddress = window.location.host; 
//     const ipAddress_ = window.location.hostname;
//     const message = `Your IP address is: ${ipAddress} ,  ${ipAddress_}`;

//     setMessage(message);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Show IP Address</button>
//       <div>{message}</div>
//     </div>
//   );
// }

// export default Show_IP_address;

// import React, { useState, useEffect } from 'react';

// function Show_IP_address() {
//   const [ipAddress, setIpAddress] = useState(''); // เก็บ IP address

//   useEffect(() => {
//     // ฟังก์ชันดึง IP address ด้วย WebRTC
//     function getIPAddress() {
//       const pc = new RTCPeerConnection();
//       pc.createDataChannel('');
//       pc.createOffer().then(pc.setLocalDescription.bind(pc)).catch(console.error);

//       pc.onicecandidate = function(e) {
//         if (e.candidate) {
//           const ipAddr = e.candidate.address;
//           setIpAddress(ipAddr);
//           pc.onicecandidate = () => {}; // หยุดการทำงานเมื่อได้ IP address แล้ว
//         }
//       };
//     }

//     getIPAddress(); // เรียกใช้ฟังก์ชันเมื่อ component ถูก mount

//     return () => {
//       // เมื่อ component ถูก unmount ให้ล้างค่า IP address ทิ้ง
//       setIpAddress('');
//     };
//   }, []);

//   return (
//     <div>
//       <button onClick={() => window.location.reload()}>Show IP Address</button>
//       <div>{ipAddress ? `Your IPv4 address is: ${ipAddress}` : 'Loading...'}</div>
//     </div>
//   );
// }

// export default Show_IP_address;
import React, { useState, useEffect } from 'react';
import { internalIpV4 } from 'internal-ip';

function MyComponent() {
  const [ipaddress, setipaddress] = useState("");   

  useEffect(() => {
    const fetchIPAddress = async () => {
      console.log("data",await internalIpV4());
      try {
        const ipv4 = await internalIpV4();
        if (ipv4 !== undefined && ipv4.length > 0) {
          setipaddress(ipv4);
        } else {
          setipaddress("ไม่พบ IP address");
        }
      } catch (error) {
        console.error("Error fetching IP:", error);
        setipaddress("เกิดข้อผิดพลาดในการดึงข้อมูล IP");
      }
    };

    fetchIPAddress();
  }, []);

  return (
    <div>
      {ipaddress ? (
        <p>IPv4 address ของเครื่องที่ใช้งานออกมา: {ipaddress}</p>
      ) : (
        <p>กำลังโหลดข้อมูล IP address...</p>
      )}
    </div>
  );
}

export default MyComponent;
