var interfaceConfig = { // eslint-disable-line no-unused-vars
    CANVAS_EXTRA: 104,
    CANVAS_RADIUS: 0,
    SHADOW_COLOR: '#ffffff',
    // TO FIX: this needs to be handled from SASS variables. There are some
    // methods allowing to use variables both in css and js.
    DEFAULT_BACKGROUND: '#474747',
    INITIAL_TOOLBAR_TIMEOUT: 20000,
    TOOLBAR_TIMEOUT: 4000,
    DEFAULT_REMOTE_DISPLAY_NAME: "Attender",
    DEFAULT_LOCAL_DISPLAY_NAME: "Yo",
    SHOW_JITSI_WATERMARK: false,
    JITSI_WATERMARK_LINK: "https://playeek.com",
    SHOW_BRAND_WATERMARK: false,
    BRAND_WATERMARK_LINK: "",
    SHOW_POWERED_BY: false,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
    APP_NAME: "Playeek",
    LANG_DETECTION: false,    // Allow i18n to detect the system language
    INVITATION_POWERED_BY: false,
    /**
     * If we should show authentication block in profile
     */
    AUTHENTICATION_ENABLE: true,
    /**
     * The index of the splitter button in the main toolbar. The splitter
     * button is a button in the toolbar that will be applied a special styling
     * visually dividing the toolbar buttons.
     */
    //MAIN_TOOLBAR_SPLITTER_INDEX: -1,
    /**
     * the toolbar buttons line is intentionally left in one line, to be able
     * to easily override values or remove them using regex
     */
    TOOLBAR_BUTTONS: [
        //main toolbar
        'microphone', 'fullscreen',
        //extended toolbar
        'contacts', 'chat', 'unmuteall', 'muteall', 'settings'], // jshint ignore:line
    /**
     * Main Toolbar Buttons
     * All of them should be in TOOLBAR_BUTTONS
     */
    MAIN_TOOLBAR_BUTTONS: ['microphone', 'camera', 'desktop', 'fullscreen'], // jshint ignore:line
    SETTINGS_SECTIONS: ['language', 'devices'],
    // Determines how the video would fit the screen. 'both' would fit the whole
    // screen, 'height' would fit the original video height to the height of the
    // screen, 'width' would fit the original video width to the width of the
    // screen respecting ratio.
    VIDEO_LAYOUT_FIT: 'both',
    SHOW_CONTACTLIST_AVATARS: false,
    /**
     * Whether to only show the filmstrip (and hide the toolbar).
     */
    filmStripOnly: false,

    eventName: 'local_event_name',
    moderatorName: '*** el anfitrión ***',
    RANDOM_AVATAR_URL_PREFIX: false,
    RANDOM_AVATAR_URL_SUFFIX: false,
    FILM_STRIP_MAX_HEIGHT: 120,
    // Enables feedback star animation.
    ENABLE_FEEDBACK_ANIMATION: false,
    DISABLE_FOCUS_INDICATOR: false,
    DISABLE_DOMINANT_SPEAKER_INDICATOR: false,
    // disables the ringing sound when the RingOverlay is shown.
    DISABLE_RINGING: false,
    AUDIO_LEVEL_PRIMARY_COLOR: "rgba(255,255,255,0.4)",
    AUDIO_LEVEL_SECONDARY_COLOR: "rgba(255,255,255,0.2)",
    POLICY_LOGO: null,
    LOCAL_THUMBNAIL_RATIO: 16/9, //16:9
    REMOTE_THUMBNAIL_RATIO: 1 //1:1
};
