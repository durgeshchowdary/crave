module.exports = {
  content: [
	'./index.html',
	'./src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
	extend: {
	  colors: {
		brand: {
		  DEFAULT: '#ff5a3c',
		  dark: '#e0492a'
		}
	  },
		fontFamily: {
		sans: ['Inter', 'ui-sans-serif', 'system-ui'],
		display: ['Playfair Display', 'serif']
	  },
	  boxShadow: {
		card: '0 6px 30px rgba(15, 23, 42, 0.08)',
		soft: '0 8px 40px rgba(2,6,23,0.06)'
	  },
	  borderRadius: {
		xl2: '1rem'
	  }
	}
  },
  plugins: []
}
