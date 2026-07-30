type TokenColor = {
	scope: string | string[];
	settings: {
		foreground?: string;
		fontStyle?: 'italic' | 'bold' | 'underline' | '';
	};
};
type semanticTokenColor = {
	rules: Record<string, string>;
};
type VscodeTheme = {
	$schema: string;
	name: string;
	type: 'dark' | 'light';
	semanticHighlighting: boolean;
	semanticTokenColors?: semanticTokenColor;
	colors: Record<string, string>;
	tokenColors: TokenColor[];
};
const colors = {
	background: '#F7F8FA',
	selection: '#DBEAFE',
	dropBackground: '#DBEAFE',
	transparent: '#00000000',
	badge: {
		background: '#2563EB',
		foreground: '#FFFFFF',
	},
	scrollbar: {
		Normal: '#BFC8D480',
		Hover: '#98A6B8B0',
		Active: '#64748BCC',
		Shadow: '#00000014',
	},
	border: {
		pry: '#D8DEE9',
		sec: '#E5E7EB',
		active: '#2563EB',
	},
	text: {
		foreground: '#1F2937',
		secondary: '#4B5563',
		muted: '#7b808a69',
		disabled: '#9CA3AF',
	},
	accent: '#2563EB',
	button: {
		background: '#2563EB',
		hover: '#1D4ED8',
	},
	git: {
		added: '#16A34A',
		modified: '#2563EB',
		conflicting: '#DC2626',
		stageModified: '#0891B2',
		deleted: '#DC2626',
		stageDeleted: '#EA580C',
		untracked: '#16A34A',
		ignored: '#9CA3AF',
		submodule: '#7C3AED',
	},
	error: {
		foreground: '#DC2626',
		background: '#FEF2F2',
		border: '#FCA5A5',
	},

	warning: {
		foreground: '#D97706',
		background: '#FFFBEB',
		border: '#FCD34D',
	},

	success: {
		foreground: '#16A34A',
		background: '#F0FDF4',
		border: '#86EFAC',
	},

	info: {
		foreground: '#2563EB',
		background: '#EFF6FF',
		border: '#93C5FD',
	},

	hover: {
		default: '#EBEEF5',
		active: '#E4E7EE',
	},

	stickyScroll: {
		background: '#FFFFFF',
		shadow: '#00000014',
		hover: '#e8eaefaf',
	},
};

const LightTheme: VscodeTheme = {
	$schema: 'vscode://schemas/color-theme',
	name: 'Stylta Flow Light',
	type: 'light',
	semanticHighlighting: true,
	colors: {
		//Unnecessary code
		'editorUnnecessaryCode.opacity': '#00000080',

		//[Global]--FocusBorder
		focusBorder: colors.border.pry,

		//Backgrounds
		'editor.background': colors.background,
		'statusBar.background': colors.background,
		'dropdown.background': colors.background,
		'input.background': colors.background,
		'panel.background': colors.background,
		'breadcrumb.background': colors.background,
		'breadcrumbPicker.background': colors.background,
		'checkbox.background': colors.background,
		'quickInput.background': colors.background,
		'keybindingLabel.background': colors.background,
		'statusBar.debuggingBackground': colors.accent,
		'debugToolBar.background': '#ffffff',
		'editorGroupHeader.tabsBackground': colors.background,
		'editorGroupHeader.noTabsBackground': colors.background,
		'editorGroup.emptyBackground': colors.background,
		'editorWidget.background': colors.background,
		'statusBar.noFolderBackground': colors.background,
		'statusBarItem.prominentBackground': colors.background,
		'activityBar.background': colors.background,
		'menu.background': colors.background,
		'sideBar.background': colors.background,
		'sideBarSectionHeader.background': colors.background,

		//Activity bar
		'activityBar.foreground': colors.text.foreground,
		'activityBar.inactiveForeground': colors.text.muted,
		'activityBar.activeBorder': colors.border.active,
		'activityBar.border': colors.transparent,
		'activityBarBadge.background': colors.badge.background,
		'activityBarBadge.foreground': colors.badge.foreground,

		//Sidebar
		'sideBar.border': colors.transparent,
		'sideBar.foreground': colors.text.secondary,
		'sideBar.dropBackground': colors.dropBackground,
		'sideBarSectionHeader.foreground': colors.text.foreground,
		'sideBarSectionHeader.border': colors.transparent,

		//sidebar indent tree
		'tree.inactiveIndentGuidesStroke': colors.border.sec,
		'tree.indentGuidesStroke': colors.text.foreground,

		// sash (the draggable divider between panels)
		'sash.hoverBorder': colors.transparent,

		//StickyScroll
		'editorStickyScrollHover.background': colors.stickyScroll.hover,
		'editorStickyScroll.border': colors.transparent,
		'editorStickyScroll.shadow': colors.transparent,

		//TitleBar
		'titleBar.activeBackground': colors.background,
		'titleBar.inactiveBackground': colors.background,
		'titleBar.activeForeground': colors.text.foreground,
		'titleBar.inactiveForeground': colors.text.secondary,

		//Tabs
		'tab.border': colors.border.sec,
		'tab.inactiveBackground': colors.background,
		'tab.inactiveForeground': colors.text.secondary,
		'tab.activeBackground': colors.background,
		'tab.activeForeground': colors.text.foreground,
		'tab.activeModifiedBorder': colors.border.active,
		'tab.hoverBackground': colors.hover.active,
		'tab.hoverForeground': colors.text.foreground,
		'tab.dragAndDropBorder': colors.border.pry,
		'tab.activeBorderTop': colors.border.active,
		'tab.unfocusedActiveBorderTop': colors.border.pry,
		'editorGroupHeader.border': colors.border.sec,

		//Scrollbar
		'scrollbar.shadow': colors.scrollbar.Shadow,
		'scrollbarSlider.background': colors.scrollbar.Normal,
		'scrollbarSlider.hoverBackground': colors.scrollbar.Hover,
		'scrollbarSlider.activeBackground': colors.scrollbar.Active,

		// Widget (find/replace, tooltip, suggest widget when typing and hovering and the rest)
		'widget.border': colors.border.pry,
		'widget.shadow': colors.stickyScroll.shadow,
		'editorSuggestWidget.foreground': colors.text.foreground,
		'editorSuggestWidget.highlightForeground': colors.text.foreground,
		'editorSuggestWidget.selectedBackground': colors.selection,
		'editorSuggestWidget.selectedForeground': colors.text.foreground,
		'editorSuggestWidget.border': colors.border.pry,
		'editorHoverWidget.border': colors.border.pry,
		'editorHoverWidget.background': '#ffffff',
		'editorHoverWidget.foreground': colors.text.foreground,

		//breadCrumbs
		'breadcrumb.foreground': colors.text.disabled,
		'breadcrumb.focusForeground': colors.text.foreground,
		'breadcrumb.activeSelectionForeground': colors.text.foreground,

		//editorLine number
		'editorLineNumber.foreground': colors.text.disabled,
		'editorLineNumber.activeForeground': colors.accent,

		// git
		'gitDecoration.addedResourceForeground': colors.git.added,
		'gitDecoration.modifiedResourceForeground': colors.git.modified,
		'gitDecoration.conflictingResourceForeground': colors.git.conflicting,
		'gitDecoration.stageModifiedResourceForeground': colors.git.stageModified,
		'gitDecoration.deletedResourceForeground': colors.git.deleted,
		'gitDecoration.stageDeletedResourceForeground': colors.git.stageDeleted,
		'gitDecoration.untrackedResourceForeground': colors.git.untracked,
		'gitDecoration.ignoredResourceForeground': colors.git.ignored,
		'gitDecoration.submoduleResourceForeground': colors.git.submodule,
		'gitlens.trailingLineBackgroundColor': colors.transparent,

		//editor
		'editor.foreground': '#1F2937',
		'editor.selectionBackground': '#DBEAFE',
		'editor.inactiveSelectionBackground': '#EAF2FE',
		'editor.foldBackground': '#DBEAFE40',
		'editorIndentGuide.background1': '#D8DEE9',
		'editorIndentGuide.activeBackground1': '#2563EB',
		'editor.selectionHighlightBackground': '#DCE7F9',
		'editor.findMatchBackground': '#2563EB44',
		'editor.findMatchBorder': '#2564ebb3',
		'editor.findMatchHighlightBackground': '#2563EB22',
		'editor.findMatchHighlightBorder': '#00000000',
		'editor.hoverHighlightBackground': '#2563EB12',
		'editor.wordHighlightBackground': '#2563EB18',
		'editor.wordHighlightStrongBackground': '#2563EB25',
		'editor.lineHighlightBorder': colors.border.pry,
		'editor.lineHighlightBackground': '#00000008',
		'editorWhitespace.foreground': '#E5E7EB',
		'editorRuler.foreground': '#D8DEE9',
		'editorOverviewRuler.border': '#00000000',
		'editorOverviewRuler.findMatchForeground': '#2563EB99',
		'editorOverviewRuler.rangeHighlightForeground': '#0891B288',
		'editorOverviewRuler.selectionHighlightForeground': '#2563EBCC',
		'editorOverviewRuler.wordHighlightForeground': '#2563EB88',
		'editorOverviewRuler.wordHighlightStrongForeground': '#2563EBCC',
		'editorOverviewRuler.modifiedForeground': '#2563EB',
		'editorOverviewRuler.addedForeground': '#16A34A',
		'editorOverviewRuler.deletedForeground': '#DC2626',
		'editorOverviewRuler.errorForeground': '#DC2626',
		'editorOverviewRuler.warningForeground': '#D97706',
		'editorOverviewRuler.infoForeground': '#2563EB',
		'editorGutter.background': '#F7F8FA',
		'editorGutter.modifiedBackground': '#2563EB',
		'editorGutter.addedBackground': '#16A34A',
		'editorGutter.deletedBackground': '#DC2626',
		'editorError.foreground': '#DC2626',
		'editorWarning.foreground': '#D97706',
		'editorInfo.foreground': '#2563EB',
		'editorGutter.foldingControlForeground': '#2563EB',

		//Links
		'textLink.foreground': '#2563EB',
		'textLink.activeForeground': '#0891B2',

		//ContrastBorder
		contrastBorder: '#00000000',
		contrastActiveBorder: '#00000000',

		//Extension
		'extensionBadge.remoteBackground': '#2563EB',
		'extensionIcon.preReleaseForeground': '#0891B2',
		'extensionIcon.sponsorForeground': '#7C3AED',
		'extensionIcon.starForeground': '#D97706',
		'extensionIcon.verifiedForeground': '#16A34A',

		//CodeLens
		'editorCodeLens.foreground': colors.text.foreground,
		'editorLightBulb.foreground': '#FFCB6B',
		'editorLightBulbAutoFix.foreground': '#C3E88D',

		//Quickinnput
		'quickInput.foreground': colors.text.secondary,
		'quickInputList.focusBackground': colors.selection,
		'quickInputList.focusForeground': colors.text.foreground,
		'quickInputList.focusHighlightForeground': '#2563EB',
		'quickInputList.focusIconForeground': '#2563EB',

		//foreground
		foreground: colors.text.foreground,

		// Welcome page and Walkthrough
		'walkThrough.embeddedEditorBackground': '#F7F8FA',
		'welcomePage.tileHoverBackground': '#DBEAFE',
		'walkthrough.stepTitle.foreground': '#1F2937',
		'welcomePage.progress.background': '#2563EB',

		//StatusBar
		'statusBar.foreground': colors.text.secondary,
		'statusBar.border': colors.border.sec,
		'statusBar.debuggingBorder': colors.transparent,
		'statusBarItem.hoverBackground': colors.hover.default,
		'statusBar.debuggingForeground': '#ffffff',
		'statusBar.noFolderBorder': colors.transparent,
		'statusBarItem.remoteBackground': '#00bec4',
		'statusBarItem.remoteForeground': '#ffffff',
		'statusBar.noFolderForeground': colors.text.foreground,
		'statusBarItem.activeBackground': colors.hover.active,
		'statusBarItem.warningBackground': colors.warning.background,
		'statusBarItem.warningForeground': colors.warning.foreground,
		'statusBarItem.errorBackground': colors.error.background,
		'statusBarItem.errorForeground': colors.error.foreground,
		'statusBarItem.compactHoverBackground': colors.hover.default,
		'statusBarItem.prominentForeground': colors.text.foreground,
		'statusBarItem.prominentHoverBackground': colors.selection,

		// checkbox
		'checkbox.border': colors.border.pry,
		'checkbox.foreground': colors.text.foreground,

		//dropDown [the dropdown in the output section in the panel]
		'dropdown.border': colors.border.pry,
		'dropdown.foreground': colors.text.foreground,

		//Panel
		'panel.border': colors.border.sec,
		'panel.dropBorder': colors.border.pry,
		'panelTitle.activeBorder': colors.border.active,
		'panelTitle.activeForeground': colors.text.secondary,
		'panelTitle.inactiveForeground': colors.text.disabled,
		'panelStickyScroll.background': colors.stickyScroll.background,

		//Minimap
		'minimap.selectionHighlight': '#DBEAFE',
		'minimap.errorHighlight': '#DC26267F',
		'minimap.findMatchHighlight': '#2563EB7F',
		'minimap.foregroundOpacity': '#000000',
		'minimap.selectionOccurrenceHighlight': '#DBEAFE7F',
		'minimap.warningHighlight': '#D9770699',
		'minimapGutter.addedBackground': '#16A34A',
		'minimapGutter.deletedBackground': colors.error.background,
		'minimapGutter.modifiedBackground': '#2563EB',

		// Menu
		'menu.border': colors.border.sec,
		'menu.selectionBackground': colors.selection,
		'menu.foreground': colors.text.foreground,
		'menu.selectionBorder': colors.border.pry,
		'menu.separatorBackground': colors.border.sec,

		//SymbolIcon
		'symbolIcon.arrayForeground': '#6B7280',
		'symbolIcon.booleanForeground': '#EA580C',
		'symbolIcon.classForeground': '#D97706',
		'symbolIcon.constantForeground': '#0891B2',
		'symbolIcon.constructorForeground': '#2563EB',
		'symbolIcon.enumeratorMemberForeground': '#EA580C',
		'symbolIcon.eventForeground': '#2563EB',
		'symbolIcon.fieldForeground': '#0891B2',
		'symbolIcon.fileForeground': '#4B5563',
		'symbolIcon.folderForeground': '#2563EB',
		'symbolIcon.functionForeground': '#2563EB',
		'symbolIcon.interfaceForeground': '#D97706',
		'symbolIcon.keyForeground': '#0891B2',
		'symbolIcon.keywordForeground': '#7C3AED',
		'symbolIcon.methodForeground': '#2563EB',
		'symbolIcon.moduleForeground': '#2563EB',
		'symbolIcon.namespaceForeground': '#2563EB',
		'symbolIcon.nullForeground': '#EA580C',
		'symbolIcon.numberForeground': '#EA580C',
		'symbolIcon.objectForeground': '#1F2937',
		'symbolIcon.operatorForeground': '#7C3AED',
		'symbolIcon.packageForeground': '#2563EB',
		'symbolIcon.propertyForeground': '#0891B2',
		'symbolIcon.snippetForeground': '#7C3AED',
		'symbolIcon.stringForeground': '#2F855A',
		'symbolIcon.structForeground': '#D97706',
		'symbolIcon.textForeground': '#1F2937',
		'symbolIcon.typeParameterForeground': '#D97706',
		'symbolIcon.unitForeground': '#EA580C',
		'symbolIcon.variableForeground': '#1F2937',

		//keybinding label
		'keybindingLabel.border': colors.border.pry,
		'keybindingLabel.bottomBorder': colors.transparent,
		'keybindingLabel.foreground': colors.text.foreground,

		//List
		'list.hoverBackground': colors.selection,
		'list.inactiveSelectionBackground': colors.selection,
		'list.activeSelectionBackground': colors.selection,
		'list.activeSelectionForeground': colors.text.foreground,
		'list.inactiveFocusBackground': colors.selection,
		'list.dropBackground': colors.dropBackground,
		'list.errorForeground': colors.error.foreground,
		'list.filterMatchBackground': '#82AAFF22',
		'list.filterMatchBorder': '#00000000',
		'list.inactiveSelectionForeground': colors.text.disabled,
		'list.highlightForeground': '#D97706',
		'list.focusForeground': colors.text.foreground, //breadcrumbs list
		'list.focusBackground': colors.selection, //breadcrumbs list
		'list.focusHighlightForeground': colors.accent, //typing in command pallette
		'listFilterWidget.background': '#FFFFFF',
		'listFilterWidget.noMatchesOutline': '#DC2626',
		'list.invalidItemForeground': '#9CA3AF',
		'list.warningForeground': '#D97706',

		//EditorGroup
		'editorGroup.border': colors.border.sec,
		'editorGroup.dropBackground': colors.dropBackground,
		'editorGroupHeader.tabsBorder': colors.border.sec,

		//badges
		'badge.background': colors.badge.background,
		'badge.foreground': colors.badge.foreground,

		//settings page
		'settings.headerBorder': colors.border.sec,
		'settings.focusedRowBorder': colors.border.pry,

		//Notifications
		'notificationCenter.border': colors.border.pry,
		'notificationCenterHeader.background': '#FFFFFF',
		'notificationCenterHeader.foreground': '#1F2937',
		'notifications.background': '#FFFFFF',
		'notifications.foreground': '#4B5563',
		'notificationToast.border': '#D8DEE9',
		'notificationLink.foreground': '#2563EB',

		// Button
		'button.hoverBackground': colors.button.hover,
		'button.foreground': '#FFFFFF',
		'button.secondaryBackground': '#F3F4F6',
		'button.secondaryHoverBackground': '#E5E7EB',
		'button.secondaryForeground': colors.text.secondary,
		'button.border': colors.transparent,
		'button.secondaryBorder': colors.border.sec,
		'button.separator': colors.border.pry,

		//Input
		'input.border': colors.border.sec,
		'input.foreground': colors.text.foreground,
		'input.placeholderForeground': colors.text.disabled,
		'inputValidation.errorBorder': colors.error.border,
		'inputValidation.errorBackground': colors.error.background,
		'inputValidation.infoBorder': colors.info.border,
		'inputValidation.infoBackground': colors.info.background,
		'inputValidation.infoForeground': colors.info.foreground,
		'inputValidation.warningBorder': colors.warning.border,
		'inputValidation.warningForeground': colors.warning.foreground,
		'inputValidation.warningBackground': colors.warning.background,
		'inputOption.activeBackground': '#DBEAFE',
		'inputOption.activeBorder': colors.text.disabled,
		'inputOption.activeForeground': '#1F2937',

		//debug
		'debugToolBar.border': colors.border.active,
		'debugConsole.errorForeground': colors.error.foreground,
		'debugConsole.infoForeground': colors.info.foreground,
		'debugConsole.warningForeground': colors.warning.foreground,
		'debugExceptionWidget.background': '#FEF2F2',
		'debugExceptionWidget.border': '#DC2626',

		// ToolBar
		'toolbar.hoverBackground': colors.hover.active,
		'toolbar.hoverOutline': colors.text.secondary,

		//EditorOverviewRuler
		'editorOverviewRuler.currentContentForeground': '#2563EB',
		'editorOverviewRuler.incomingContentForeground': '#16A34A',
		'editorOverviewRuler.commonContentForeground': '#9CA3AF',

		// MergeEditor Conflict
		'merge.currentHeaderBackground': '#DBEAFE',
		'merge.currentContentBackground': '#DBEAFE80',
		'merge.incomingHeaderBackground': '#DCFCE7',
		'merge.incomingContentBackground': '#DCFCE780',
		'merge.border': '#00000000',
		'mergeEditor.conflict.handledFocused.border': '#2563EB',
		'mergeEditor.conflict.handledUnfocused.border': '#16A34A',
		'mergeEditor.conflict.handled.minimapOverViewRuler': '#16A34A',
		'mergeEditor.conflict.unhandled.minimapOverViewRuler': '#EA580C',
		'mergeEditor.conflict.unhandledFocused.border': '#2563EB',
		'mergeEditor.conflict.unhandledUnfocused.border': '#EA580C',
		'mergeEditor.conflictingLines.background': '#DC26261A',
		'mergeEditor.change.background': '#16A34A22',
		'mergeEditor.change.word.background': '#16A34A40',

		// Charts
		'charts.blue': '#2563EB',
		'charts.green': '#16A34A',
		'charts.orange': '#EA580C',
		'charts.purple': '#7C3AED',
		'charts.red': '#DC2626',
		'charts.yellow': '#D97706',
		'charts.foreground': '#4B5563',
		'charts.lines': '#D8DEE9',

		//Editor Brackets
		'editorBracketHighlight.foreground1': '#7C3AED',
		'editorBracketHighlight.foreground2': '#2563EB',
		'editorBracketHighlight.foreground3': '#0891B2',
		'editorBracketHighlight.foreground4': '#2F855A',
		'editorBracketHighlight.foreground5': '#D97706',
		'editorBracketHighlight.foreground6': '#EA580C',
		'editorBracketHighlight.unexpectedBracket.foreground': '#DC2626',
		'editorBracketPairGuide.activeBackground1': '#7C3AEDCC',
		'editorBracketPairGuide.activeBackground2': '#2563EBCC',
		'editorBracketPairGuide.activeBackground3': '#0891B2CC',
		'editorBracketPairGuide.activeBackground4': '#2F855ACC',
		'editorBracketPairGuide.activeBackground5': '#D97706CC',
		'editorBracketPairGuide.activeBackground6': '#EA580CCC',
		'editorBracketMatch.background': '#DBEAFE',
		'editorBracketMatch.border': '#2563EB80',

		// Icons
		'selection.background': colors.selection,
		errorForeground: colors.error.foreground,
		'icon.foreground': colors.text.foreground,
		'progressBar.background': colors.accent,
		'problemsErrorIcon.foreground': colors.error.foreground,
		'problemsInfoIcon.foreground': colors.info.foreground,
		'problemsWarningIcon.foreground': colors.warning.foreground,

		//diff editor
		'diffEditor.diagonalFill': '#D8DEE9',
		'diffEditor.insertedLineBackground': '#F0FDF4',
		'diffEditor.insertedTextBackground': '#16A34A33',
		'diffEditor.removedLineBackground': '#FEF2F2',
		'diffEditor.removedTextBackground': '#DC262633',
		'diffEditor.unchangedCodeBackground': '#F7F8FA',
		'diffEditor.unchangedRegionBackground': '#F3F4F6',
		'diffEditor.unchangedRegionForeground': '#6B7280',

		//PeekView
		'peekView.border': '#0000004c',
		'peekViewEditor.background': colors.background,
		'peekViewEditorGutter.background': colors.background,
		'peekViewTitle.background': '#FFFFFF',
		'peekViewResult.background': '#FFFFFF',
		'peekViewResult.fileForeground': colors.text.foreground,
		'peekViewTitleDescription.foreground': colors.text.secondary,
		'peekViewTitleLabel.foreground': colors.text.foreground,
		'peekViewResult.selectionBackground': colors.selection,
		'peekViewResult.selectionForeground': colors.text.foreground,
		'peekViewResult.matchHighlightBackground': colors.selection,
		'peekViewEditor.matchHighlightBackground': colors.selection,
		'peekViewEditor.matchHighlightBorder': colors.border.pry,
		'peekViewResult.lineForeground': colors.text.foreground,

		//Terminal
		'terminal.border': colors.border.sec,
		'terminal.ansiBlack': '#000000',
		'terminal.ansiBlue': '#82AAFF',
		'terminal.ansiGreen': '#C3E88D',
		'terminal.ansiCyan': '#89DDFF',
		'terminal.ansiRed': '#FF5370',
		'terminal.ansiMagenta': '#C792EA',
		'terminal.ansiYellow': '#FFCB6B',
		'terminal.ansiWhite': '#E0E0E0',
		'terminal.ansiBrightBlack': '#8A8A8A',
		'terminal.ansiBrightBlue': '#A6C8FF',
		'terminal.ansiBrightGreen': '#D7F5A7',
		'terminal.ansiBrightCyan': '#A5EAFF',
		'terminal.ansiBrightRed': '#FF7B93',
		'terminal.ansiBrightMagenta': '#DDB3FF',
		'terminal.ansiBrightYellow': '#FFE082',
		'terminal.ansiBrightWhite': '#FFFFFF',
		'terminalCursor.foreground': '#82AAFF',

		//command center
		'commandCenter.foreground': colors.text.foreground,
		'commandCenter.border': colors.border.pry,
		'commandCenter.activeBackground': '#F3F4F6',
		'commandCenter.activeForeground': '#1F2937',
		'commandCenter.activeBorder': colors.border.active,
		'commandCenter.inactiveForeground': colors.text.muted,

		//Debug icon
		'debugIcon.breakpointForeground': '#FF5370',
		'debugIcon.breakpointCurrentStackframeForeground': '#FFCB6B',
		'debugIcon.breakpointDisabledForeground': colors.text.disabled,
	},
	semanticTokenColors: {
		rules: {
			'variable.defaultLibrary': '#7C3AED',
			operatorOverload: '#0891B2',
			memberOperatorOverload: '#0891B2',
			'variable.defaultLibrary:javascript': '#7C3AED',
			'property.defaultLibrary:javascript': '#7C3AED',
			'variable.defaultLibrary:javascriptreact': '#7C3AED',
			'property.defaultLibrary:javascriptreact': '#7C3AED',
			'class:typescript': '#D97706',
			'interface:typescript': '#D97706',
			'enum:typescript': '#EA580C',
			'enumMember:typescript': '#EA580C',
			'namespace:typescript': '#2563EB',
			'property.defaultLibrary:typescript': '#7C3AED',
			'class:typescriptreact': '#D97706',
			'interface:typescriptreact': '#D97706',
			'enum:typescriptreact': '#EA580C',
			'enumMember:typescriptreact': '#EA580C',
			'namespace:typescriptreact': '#2563EB',
			'variable.defaultLibrary:typescriptreact': '#7C3AED',
			'property.defaultLibrary:typescriptreact': '#7C3AED',
			'intrinsic:python': '#7C3AED',
			'module:python': '#2563EB',
			'class:python': '#D97706',
			'macro:rust': '#2563EB',
			'namespace:rust': '#2563EB',
			'selfKeyword:rust': '#DC2626',
			function: '#2563EB',
			method: '#2563EB',
			variable: '#1F2937',
			parameter: '#4B5563',
			property: '#0891B2',
			keyword: '#7C3AED',
			string: '#2F855A',
			number: '#EA580C',
			typeParameter: '#D97706',
			'property:jsx': '#0891B2',
			'parameter:jsx': '#4B5563',
			'class:jsx': '#D97706',
			type: '#D97706',
			decorator: '#7C3AED',
			label: '#2563EB',
			regexp: '#2F855A',
			operator: '#7C3AED',
		},
	},
	tokenColors: [
		//  EMBEDDED LANGUAGES
		{
			scope: ['meta.embedded.block.html', 'meta.embedded.block.javascript', 'meta.embedded.block.css'],
			settings: {
				foreground: '#1F2937',
			},
		},
		{
			scope: ['source.css.embedded.html', 'source.js.embedded.html', 'source.js.embedded.vue', 'source.ts.embedded.vue'],
			settings: {
				foreground: '#1F2937',
			},
		},
		{
			scope: ['source.css.embedded.html', 'source.js.embedded.html', 'source.js.embedded.vue', 'source.ts.embedded.vue'],
			settings: {
				foreground: '#1F2937',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.heading', 'markup.bold', 'markup.italic', 'markup.strikethrough', 'markup.underline'],
			settings: {
				foreground: '#D97706',
				fontStyle: 'bold',
			},
		},
		//  MARKDOWN
		{
			scope: ['markup.quote', 'markup.raw', 'markup.raw.block.fenced', 'markup.link', 'markup.list'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.code', 'markup.inline.raw'],
			settings: {
				foreground: '#2F855A',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.operator.type.ts', 'keyword.other.type.ts', 'entity.name.type.interface.ts', 'storage.type.ts', 'storage.type.js'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.flow.python', 'keyword.control.import.python', 'storage.type.python'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['meta.function.parameters.python'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		{
			scope: ['storage.type.c', 'storage.type.cpp', 'storage.type.cs', 'storage.type.go', 'storage.type.java', 'storage.type.rust'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.c', 'keyword.control.cpp'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.other.DML.sql', 'keyword.other.DDL.sql', 'keyword.other.DCL.sql'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['support.function.builtin.sql'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		// LANGUAGE SPECIFIC OVERRIDES
		{
			scope: ['keyword.operator.type.ts', 'keyword.other.type.ts', 'entity.name.type.interface.ts', 'storage.type.ts', 'storage.type.js'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.flow.python', 'keyword.control.import.python', 'storage.type.python'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['meta.function.parameters.python'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		{
			scope: ['storage.type.c', 'storage.type.cpp', 'storage.type.cs', 'storage.type.go', 'storage.type.java', 'storage.type.rust'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.c', 'keyword.control.cpp'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.other.DML.sql', 'keyword.other.DDL.sql', 'keyword.other.DCL.sql'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['support.function.builtin.sql'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		// DIFF / GIT
		{
			scope: ['markup.deleted.diff'],
			settings: {
				foreground: '#DC2626',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.inserted.diff'],
			settings: {
				foreground: '#16A34A',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.changed.diff'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		// HTML / CSS / PUG / VUE / SVELTE
		{
			scope: ['entity.name.tag', 'entity.name.tag.html', 'entity.name.tag.pug', 'entity.name.tag.vue', 'entity.name.tag.svelte', 'meta.tag'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		{
			scope: ['entity.other.attribute-name', 'entity.other.attribute-name.id', 'entity.other.attribute-name.class', 'keyword.attribute.pug'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.other.pug', 'keyword.other.at-rule', 'keyword.other.important'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['support.type.property-name.css', 'meta.property-name.css'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['constant.other.color.rgb-value', 'constant.other.color.hex'],
			settings: {
				foreground: '#EA580C',
				fontStyle: '',
			},
		},
		//JSON / YAML / TOML
		{
			scope: ['support.type.property-name.json', 'meta.object-literal.key', 'entity.name.tag.yaml', 'constant.other.anchor.yaml', 'entity.name.tag.reference.yaml', 'entity.name.section.toml', 'entity.name.key.toml'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		// REGEX
		{
			scope: ['string.regexp'],
			settings: {
				foreground: '#2F855A',
				fontStyle: '',
			},
		},
		{
			scope: ['string.regexp.character-class', 'constant.other.character-class.regexp'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['string.regexp.group'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.operator.regexp'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		//  FUNCTIONS
		{
			scope: ['entity.name.function', 'support.function', 'support.function.builtin', 'support.function.construct', 'meta.function-call', 'meta.function'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		{
			scope: ['entity.name.function.decorator'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['meta.function.parameters'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		// TYPES + CLASSES + INTERFACES + ENUMS
		{
			scope: ['entity.name.class', 'support.class'],
			settings: {
				foreground: '#D97706',
				fontStyle: 'bold',
			},
		},
		{
			scope: ['entity.name.type', 'entity.name.interface', 'entity.name.enum', 'support.type'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		// KEYWORDS + CONTROL FLOW + STORAGE + MODULES
		{
			scope: ['keyword.operator', 'keyword.operator.assignment', 'keyword.operator.logical', 'keyword.operator.comparison'],
			settings: {
				foreground: '#0891B2',
				fontStyle: 'bold',
			},
		},
		{
			scope: ['keyword', 'keyword.control', 'keyword.control.flow', 'keyword.control.import', 'keyword.control.export', 'storage', 'storage.type', 'storage.modifier'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		// LANGUAGE CONSTANTS: this, self, super, true, false, null
		{
			scope: ['variable.language', 'variable.language.this', 'variable.language.super', 'variable.language.self', 'variable.language.special', 'constant.language', 'constant.language.boolean', 'constant.language.null', 'constant.language.undefined'],
			settings: {
				foreground: '#EA580C',
				fontStyle: '',
			},
		},
		// LITERALS: STRINGS
		{
			scope: ['string', 'string.quoted', 'string.quoted.double', 'string.quoted.single', 'string.quoted.triple', 'string.template', 'meta.string', 'meta.string.contents'],
			settings: {
				foreground: '#2F855A',
				fontStyle: '',
			},
		},
		{
			scope: ['string.template.punctuation', 'constant.other.placeholder'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		// LITERALS: NUMBERS + CONSTANTS
		{
			scope: ['constant.numeric', 'constant.character'],
			settings: {
				foreground: '#EA580C',
				fontStyle: '',
			},
		},
		{
			scope: ['constant.other', 'support.constant'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		// COMMENTS
		{
			scope: ['comment', 'comment.line', 'comment.block', 'comment.block.documentation', 'punctuation.definition.comment'],
			settings: {
				foreground: '#6B7280',
				fontStyle: '',
			},
		},
		// VARIABLES + PARAMETERS + PROPERTIES
		{
			scope: ['variable', 'variable.other', 'variable.other.readwrite', 'entity.name.variable', 'support.variable'],
			settings: {
				foreground: '#1F2937',
				fontStyle: '',
			},
		},
		{
			scope: ['variable.parameter'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		{
			scope: ['variable.other.property', 'meta.property-name'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.definition.parameters.begin', 'punctuation.definition.parameters.end', 'punctuation.section.brackets', 'punctuation.section.brackets.begin', 'punctuation.section.brackets.end', 'meta.brace', 'meta.bracket', 'meta.paren'],
			settings: {
				foreground: '#6B7280',
				fontStyle: 'bold',
			},
		},
		{
			scope: ['punctuation.accessor', 'punctuation.separator.method'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.separator.comma', 'punctuation.separator.key-value', 'punctuation.separator.parameter'],
			settings: {
				foreground: '#6B7280',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.terminator', 'punctuation.separator.statement'],
			settings: {
				foreground: '#9CA3AF',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation'],
			settings: {
				foreground: '#6B7280',
				fontStyle: '',
			},
		},
		// CATCH-ALL DEFAULT
		{
			scope: ['invalid', 'invalid.illegal'],
			settings: {
				foreground: '#DC2626',
				fontStyle: '',
			},
		},
		{
			scope: ['source'],
			settings: {
				foreground: '#1F2937',
				fontStyle: '',
			},
		},
	],
};

// write to JSON file
import * as fs from 'node:fs';
fs.writeFileSync('themes/Stylta-Flow-Light.json', JSON.stringify(LightTheme, null, 2));
console.log('---Theme generated---');
