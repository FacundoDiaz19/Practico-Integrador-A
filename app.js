const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */
function getCountryNameByIso3(isoCode){
    const countryIso = countries.find(country => country.iso3 === isoCode)
    return countryIso.name
}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
    const Data = countries.find(country => country.iso3 === isoCode)
    const object = {
        name: Data.name,
        iso3: Data.iso3,
        iso2: Data.iso2,
        phone_code: Data.phone_code,
        capital: Data.capital,
        currency: Data.currency ,
        tld: Data.tld ,
        region: Data.region ,
        emoji: Data.emoji ,
    }

    return object
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();