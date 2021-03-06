export default {
    compareValues: function(key) {
        return function innerSort(a, b) {
            if (!a[key] || !b[key]) {
                // property doesn't exist on either object
                return 0;
            }
            const varA =
                typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
            const varB =
                typeof b[key] === "string" ? b[key].toLowerCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return comparison;
        };
    },
};
