export function If(props) {
  const elseChild = props.children.filter(child => {
    return child.type.name === 'Else'
  })[0];

  const ifChild = props.children.filter(child => {
    return child !== elseChild
  })

  if(props.test) {
    return ifChild;
  } else {
    return false;
  }
}

export const Else = (props) => {
  return props.children;
}