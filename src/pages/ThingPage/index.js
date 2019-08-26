import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@material-ui/core'
import { address } from '../../consts';
import { Illustration } from 'react-zdog'

const ThingPage = ({
  thing,
  due,
  price,
  description,
  children
}) => {

  return (
    <div className='pa3'>
      <div className='f3 tal b'>
        <span> {thing} </span>
        <span
          className='pl3'
        >
          <Chip
            label={`Due: ${due}`}
          />
        </span>
      </div>

      <div className='pa5'
        style={{
          width: '100%',
          height: '325px',
          margin: 0,
          padding: 0,
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          KhtmlUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
          overflow: 'hidden'
        }}
      >
        <Illustration zoom={6} element='svg' dragRotate={true}
          style={{
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            overflow: 'hidden'

          }}
        >
          {children}
        </Illustration>
      </div>

      <div className='pa3'>
        {`Price: £${price} per day`}
      </div>

      <div>
        {description}
      </div>

      <div className='pa3'>
        <div className='f4 gray pa2'>
          Address
        </div>

        <div className='pre'>
          {address}
        </div>
        <div className="f5 moon-gray underline pa5">
          <a href='https://codesandbox.io/s/divine-browser-iwt8o' > draggable model tea urn </a>
        </div>
      </div>
    </div>
  )
}

ThingPage.propTypes = {
  thing: PropTypes.string,
  due: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.element
}

ThingPage.defaultProps = {
  thing: 'Rosie the Tea Urn',
  due: '27/08/2019',
  price: 5.00
}

export default ThingPage
