export default function Navbar() {
  return (
    <navbar style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: 'lightgray', 
      padding: '10px 20px',
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0
    }}>
      <a href="">Home page</a>
      <a href="">About</a>
      <a href="">Blog</a>
      <a href="">Contacts</a>
    </navbar>
  );
}
