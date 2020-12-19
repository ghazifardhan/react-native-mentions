declare class MentionsTextInput {
    state: {
        textInputHeight: string;
        isTrackingStarted: boolean;
        suggestionRowHeight: any;
    };
    isTrackingStarted: boolean;
    previousChar: string;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    startTracking(): void;
    stopTracking(): void;
    openSuggestionsPanel(height: any): void;
    closeSuggestionsPanel(): void;
    updateSuggestions(lastKeyword: any): void;
    identifyKeyword(val: any): void;
    onChangeText(val: any): void;
    resetTextbox(): void;
    render(): any;
    _textInput: any;
}
declare namespace MentionsTextInput {
    namespace propTypes {
        const textInputStyle: any;
        const suggestionsPanelStyle: any;
        const loadingComponent: any;
        const textInputMinHeight: any;
        const textInputMaxHeight: any;
        const trigger: any;
        const triggerLocation: any;
        const value: any;
        const onChangeText: any;
        const triggerCallback: any;
        const renderSuggestionsRow: any;
        const suggestionsData: any;
        const keyExtractor: any;
        const horizontal: any;
        const suggestionRowHeight: any;
        function MaxVisibleRowCount(props: any, propName: any, componentName: any): Error;
    }
    namespace defaultProps {
        export namespace textInputStyle_1 {
            const borderColor: string;
            const borderWidth: number;
            const fontSize: number;
        }
        export { textInputStyle_1 as textInputStyle };
        export namespace suggestionsPanelStyle_1 {
            const backgroundColor: string;
        }
        export { suggestionsPanelStyle_1 as suggestionsPanelStyle };
        export function loadingComponent_1(): any;
        export { loadingComponent_1 as loadingComponent };
        const textInputMinHeight_1: number;
        export { textInputMinHeight_1 as textInputMinHeight };
        const textInputMaxHeight_1: number;
        export { textInputMaxHeight_1 as textInputMaxHeight };
        const horizontal_1: boolean;
        export { horizontal_1 as horizontal };
    }
}
export default MentionsTextInput;
