/**
 * Remove a class from all elements matching selector.
 * @param { String | HTMLElement[] } selector - Selector or array of elements.
 * @param { String } className - Class to remove
 */
function removeClassFromAll(selector, className) {
    if (Array.isArray(selector) || selector instanceof NodeList) {
        return selector.forEach(el => el.classList.remove(className));
    }

    document.querySelectorAll(selector).forEach(el => el.classList.remove(className));
}

/**
 * Add a class to all elements matching selector.
 * 
 * @param { String | HTMLElement[] } selector - Selector or array of elements.
 * @param { String } className - Class to remove
 */
function addClassToAll(selector, className) {
    if (Array.isArray(selector) || selector instanceof NodeList) {
        return selector.forEach(el => el.classList.add(className));
    }

    document.querySelectorAll(selector).forEach(el => el.classList.add(className));
}