import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src='/logo.svg' alt='Apple logo' />
            <ul>
                {[
                    { label: 'Store' },
                    { label: 'Mac' },
                    { label: 'Watch' },
                    { label: 'iPhone' },
                    { label: 'Vision' },
                    { label: 'AirPods' },
                ]}
            </ul>
        </nav>

    </header>
  )
}

export default Navbar