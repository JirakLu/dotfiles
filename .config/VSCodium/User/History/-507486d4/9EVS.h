/* See LICENSE file for copyright and license details. */

/* appearance */
static const unsigned int borderpx  = 1;        /* border pixel of windows */
static const unsigned int snap      = 32;       /* snap pixel */
static const int showbar            = 1;        /* 0 means no bar */
static const int topbar             = 1;        /* 0 means bottom bar */
static const char *fonts[]          = { "JetBrainsMono Nerd Font:size=10" };
static const char dmenufont[]       = "JetBrainsMono Nerd Font:size=10";
static const char col_gray1[]       = "#2E3440";
static const char col_gray2[]       = "#3B4252";
static const char col_gray3[]       = "#D8DEE9";
static const char col_gray4[]       = "#ECEFF4";
static const char col_cyan[]        = "#434C5E";
static const char *colors[][3]      = {
	/*               fg         bg         border   */
	[SchemeNorm] = { col_gray3, col_gray1, col_gray2 },
	[SchemeSel]  = { col_gray4, col_cyan,  col_cyan  },
};

/* tagging */
static const char *tags[] = { "1", "2", "3", "4", "5", "6", "7", "8", "9" };

static const Rule rules[] = {
	/* xprop(1):
	 *	WM_CLASS(STRING) = instance, class
	 *	WM_NAME(STRING) = title
	 */
	/* class		instance	title		tags mask		isfloating		monitor */
	{ "Gimp",		NULL,		NULL,		0,				1,				-1 },
	{ "Firefox",	NULL,		NULL,		1 << 8,			0,				-1 },
};

/* layout(s) */
static const float mfact     = 0.55; /* factor of master area size [0.05..0.95] */
static const int nmaster     = 1;    /* number of clients in master area */
static const int resizehints = 00;    /* 1 means respect size hints in tiled resizals */
static const int lockfullscreen = 0; /* 1 will force focus on the fullscreen window */

static const Layout layouts[] = {
	/* symbol     arrange function */
	{ "[]=",      tile },    /* first entry is default */
	{ "[M]",      monocle },
	{ "><>",      NULL },    /* no layout function means floating behavior */
};

/* key definitions */
#define MODKEY Mod4Mask
#define TAGKEYS(KEY,TAG) \
	{ MODKEY,						KEY,		view,			{.ui = 1 << TAG} }, \
	{ MODKEY|ControlMask,			KEY,		toggleview,		{.ui = 1 << TAG} }, \
	{ MODKEY|ShiftMask,				KEY,		tag,			{.ui = 1 << TAG} }, \
	{ MODKEY|ControlMask|ShiftMask,	KEY,		togglefloating,	{.ui = 1 << TAG} },

/* helper for spawning shell commands in the pre dwm-5.0 fashion */
#define SHCMD(cmd) { .v = (const char*[]){ "/bin/sh", "-c", cmd, NULL } }

/* commands */
static char dmenumon[2] = "0"; /* component of dmenucmd, manipulated in spawn() */
static const char *dmenucmd[] = { "dmenu_run", "-m", dmenumon, "-fn", dmenufont, "-nb", col_gray1, "-nf", col_gray3, "-sb", col_cyan, "-sf", col_gray4, NULL };
static const char *termcmd[]  = { "st", NULL };

#include <X11/XF86keysym.h>

static const Key keys[] = {
	/* modifier						key								function		argument */
	{ Mod1Mask,						XK_space,						spawn,			{.v = dmenucmd } },
	{ MODKEY,						XK_Return,						spawn,			{.v = termcmd } },
	{ MODKEY,						XK_b,							spawn,			SHCMD ("brave")},
	/* screenshots */
	{ 0,							XK_Print,						spawn,			SHCMD ("flameshot gui --clipboard")},
	{ MODKEY,						XK_Print,						spawn,			SHCMD ("flameshot full -p $HOME/Screenshots/")},
	{ MODKEY|ControlMask,			XK_Print,						spawn,			SHCMD ("flameshot gui -p $HOME/Screenshots/")},
	/* audio control */
	{ 0,							0xffc6,							spawn,			SHCMD ("amixer sset Master $(amixer get Master | grep -q '\\[on\\]' && echo 'mute' || echo 'unmute')")},
	{ 0,							0xffc7,							spawn,			SHCMD ("amixer sset Master 5%- unmute")},
	{ 0,							0xffc8,							spawn,			SHCMD ("amixer sset Master 5%+ unmute")},
	{ MODKEY,						XK_BackSpace,					spawn,			{.v = (const char*[]){ "sysact", NULL } } },
	{ MODKEY|ShiftMask,				XK_b,							togglebar,		{0} },
	{ MODKEY,						XK_j,							focusstack,		{.i = +1 } },
	{ MODKEY,						XK_k,							focusstack,		{.i = -1 } },
	{ MODKEY,						XK_i,							incnmaster,		{.i = +1 } },
	{ MODKEY,						XK_d,							incnmaster,		{.i = -1 } },
	{ MODKEY,						XK_h,							setmfact,		{.f = -0.05} },
	{ MODKEY,						XK_l,							setmfact,		{.f = +0.05} },
	{ MODKEY|ShiftMask,				XK_Return,						zoom,			{0} },
	{ MODKEY,						XK_Tab,							view,			{0} },
	{ MODKEY,						XK_q,							killclient,		{0} },
	{ MODKEY,						XK_t,							setlayout,		{.v = &layouts[0]} },
	{ MODKEY,						XK_f,							setlayout,		{.v = &layouts[1]} },
	{ MODKEY,						XK_m,							setlayout,		{.v = &layouts[2]} },
	{ MODKEY,						XK_space,						setlayout,		{0} },
	{ MODKEY|ShiftMask,				XK_space,						togglefloating,	{0} },
	{ MODKEY,						XK_0,							view,			{.ui = ~0 } },
	{ MODKEY|ShiftMask,				XK_0,							tag,			{.ui = ~0 } },
	{ MODKEY,						XK_comma,						focusmon,		{.i = -1 } },
	{ MODKEY,						XK_period,						focusmon,		{.i = +1 } },
	{ MODKEY|ShiftMask,				XK_comma,						tagmon,			{.i = -1 } },
	{ MODKEY|ShiftMask,				XK_period,						tagmon,			{.i = +1 } },
	{ MODKEY|ControlMask|ShiftMask,	XK_q,							quit,			{0} },
	{ MODKEY|ControlMask|ShiftMask,	XK_r,							spawn,			SHCMD("systemctl reboot")},
	{ MODKEY|ControlMask|ShiftMask,	XK_s,							spawn,			SHCMD("systemctl shutdown now")},
	TAGKEYS(						XK_1,							0)
	TAGKEYS(						XK_2,							1)
	TAGKEYS(						XK_3,							2)
	TAGKEYS(						XK_4,							3)
	TAGKEYS(						XK_5,							4)
	TAGKEYS(						XK_6,							5)
	TAGKEYS(						XK_7,							6)
	TAGKEYS(						XK_8,							7)
	TAGKEYS(						XK_9,							8)
};

/* button definitions */
/* click can be ClkTagBar, ClkLtSymbol, ClkStatusText, ClkWinTitle, ClkClientWin, or ClkRootWin */
static const Button buttons[] = {
	/* click                event mask      button          function        argument */
	{ ClkLtSymbol,          0,              Button1,        setlayout,      {0} },
	{ ClkLtSymbol,          0,              Button3,        setlayout,      {.v = &layouts[2]} },
	{ ClkWinTitle,          0,              Button2,        zoom,           {0} },
	{ ClkStatusText,        0,              Button2,        spawn,          {.v = termcmd } },
	{ ClkClientWin,         MODKEY,         Button1,        movemouse,      {0} },
	{ ClkClientWin,         MODKEY,         Button2,        togglefloating, {0} },
	{ ClkClientWin,         MODKEY,         Button3,        resizemouse,    {0} },
	{ ClkTagBar,            0,              Button1,        view,           {0} },
	{ ClkTagBar,            0,              Button3,        toggleview,     {0} },
	{ ClkTagBar,            MODKEY,         Button1,        tag,            {0} },
	{ ClkTagBar,            MODKEY,         Button3,        toggletag,      {0} },
};
