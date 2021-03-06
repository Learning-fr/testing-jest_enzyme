import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} attribute - Value of data-test attribute for search
 */
export const findByTestAttr = (wrapper, attribute) => {
  return wrapper.find(`[data-test="${attribute}"]`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}