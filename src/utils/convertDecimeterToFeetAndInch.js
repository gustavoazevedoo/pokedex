export default function convertDecimeterToFeetAndInch(decimeter) {
  const decimeterInInches = decimeter * 3.937;

  const feet = Math.floor(decimeterInInches / 12);
  const inches = Math.round(decimeterInInches % 12);
  const formatedInches = (String(inches).padStart(2, '0'));

  return `${feet}' ${formatedInches}"`;
}
