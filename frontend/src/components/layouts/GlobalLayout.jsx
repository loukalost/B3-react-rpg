function GlobalLayout ({ children }) {
  return (
    <div className='bg-gradient-to-r from-green-100 to-green-400'>
      <header>
        Mon header
      </header>
      <main>
        {children}
      </main>
      <footer>
        Mon footer
      </footer>
    </div>
  )
}

export default GlobalLayout
