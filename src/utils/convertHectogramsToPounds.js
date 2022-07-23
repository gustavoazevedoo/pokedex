export default function convertHectogramsToPounds(hectogram) {
  const ONE_HECTOGRAM_IN_POUNDS = 0.2204622622;
  const pound = (hectogram * ONE_HECTOGRAM_IN_POUNDS).toFixed(1);
  return pound;
}
