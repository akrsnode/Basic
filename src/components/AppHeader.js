import '../styles/vie.min.css';

function AppHeader() {
  return(
    <header>
      <h1>Vie</h1>
      <div className='localTime'>
        {new Date().getHours()}:{new Date().getMinutes()}
      </div>
    </header>
  )
}

export default AppHeader;