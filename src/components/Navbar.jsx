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
                ].map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src='/search.svg' alt='Search' />
                </button>
                <button>
                    <img src='/cart.svg' alt='Cart' />
                </button>
            </div>
        </nav>

    </header>
  )
}

export default Navbar