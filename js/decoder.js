function decodeFlag(encoded) {
    try {
        return atob(encoded);
    } catch (e) {
        return "ERROR: Unable to decode flag.";
    }
}
