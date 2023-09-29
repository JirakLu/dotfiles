/* See LICENSE file for copyright and license details. */
/* Default settings; can be overriden by command line. */


static int topbar = 1;						/* -b  option; if 0, dmenu appears at bottom */
static int centered = 1;					/* -c option; centers dmenu on screen */
static int min_width = 400;					/* minimum width when centered */

/* -fn option overrides fonts[0]; default X11 font or font set */
static const char *fonts[] = {
	"JetBrainsMono Nerd Font:size=10"
};

/* -p  option; prompt to the left of input field */
static const char *prompt = NULL;

static const char *colors[SchemeLast][2] = {
	/*					fg         bg       */
	[SchemeNorm] = 	{ "#D8DEE9", "#3B4252" },
	[SchemeSel] = 	{ "#E5E9F0", "#88C0D0" },
	[SchemeOut] = 	{ "#000000", "#00ffff" },
};
/* -l and -g options; controls number of lines and columns in grid if > 0 */
static unsigned int lines      = 10;
static unsigned int columns    = 1;

/*
 * Characters not considered part of a word while deleting words
 * for example: " /?\"&[]"
 */
static const char worddelimiters[] = " ";


/* Size of the window border */
static unsigned int border_width = 2;