DOM = {
  passwInput: document.querySelector('.password-strength__input'),
  passwVisibilityBtn: document.querySelector('.password-strength__visibility'),
  passwVisibility_icon: '.password-strength__visibility-icon' };


const getPasswordVal = () => {
  console.log(DOM.passwInput.value);
  return DOM.passwInput.value;
};

// const passwordStrength = () => {
//   getPasswordVal();
// };

const passwordVisible = passwField => {

  const passwType = passwField.getAttribute('type');

  let visibilityStatus;

  if (passwType === 'text') {

    passwField.setAttribute('type', 'password');

    visibilityStatus = 'hidden';

  } else {

    passwField.setAttribute('type', 'text');

    visibilityStatus = 'visible';

  }

  return visibilityStatus;

};

const changeVisibiltyBtnIcon = (btn, status) => {

  const hiddenPasswIcon = btn.querySelector(`${DOM.passwVisibility_icon}[data-visible="hidden"]`);

  const visibilePasswIcon = btn.querySelector(`${DOM.passwVisibility_icon}[data-visible="visible"]`);

  if (status === 'visible') {
    visibilePasswIcon.classList.remove('js-hidden');
    hiddenPasswIcon.classList.add('js-hidden');
  } else if (status === 'hidden') {
    visibilePasswIcon.classList.add('js-hidden');
    hiddenPasswIcon.classList.remove('js-hidden');
  }

};

const passwVisibilitySwitcher = (passwField, visibilityToggler) => {

  const visibilityStatus = passwordVisible(passwField);

  changeVisibiltyBtnIcon(visibilityToggler, visibilityStatus);
};

// DOM.passwInput.addEventListener('input', () => {
//   passwordStrength();
// });

DOM.passwVisibilityBtn.addEventListener('click', e => {

  let toggler = e.target;

  if (toggler.tagName === 'I') {
    toggler = e.target.parentNode.parentNode;
  } else if (toggler.tagName === 'SPAN') {
    toggler = e.target.parentNode;
  }

  passwVisibilitySwitcher(DOM.passwInput, toggler);

});