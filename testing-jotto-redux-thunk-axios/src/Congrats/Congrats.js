import React from 'react'

/**
 * Functional compoenent for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component(or null if `success` props is not provided)
 */

export default ({ success }) => {
  return (
    success ?
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word
      </span>
      </div>
      :
      <div data-test="component-congrats" />
  )
}