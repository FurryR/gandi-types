// Type definitions for scratch-blocks
// Project: https://github.com/LLK/scratch-blocks

declare namespace ScratchBlocks {
  type UnknownFunction = (...args: unknown[]) => void;
  // Gandi
  type DeletionCallbackFunc = (
    block: BlockSvg,
    undoFunc: UnknownFunction,
    ws: Workspace
  ) => boolean | void;
  interface Metrics {
    viewHeight: number;
    viewWidth: number;
    contentHeight: number;
    contentWidth: number;
    viewTop: number;
    viewLeft: number;
    contentTop: number;
    contentLeft: number;
    absoluteTop: number;
    absoluteLeft: number;
    flyoutHeight?: number;
    flyoutWidth?: number;
    toolboxHeight?: number;
    toolboxPosition?: number;
    toolboxWidth?: number;
  }
  interface Toolbox {
    HtmlDiv: HTMLElement;
    RTL: boolean;
    categoryMenu_: unknown;
    flyout_: VerticalFlyout;
  }
  interface VerticalFlyout {
    RTL: boolean;
    backgroundButtons_: Array<SVGRectElement>;
    buttons: Array<unknown>;
    categoryScrollPositions: Array<{
      categoryId: string;
      categoryName: string;
      length: number;
      position: number;
    }>;
    checkboxes_: Record<
      string,
      {
        block: Block;
        clicked: boolean;
        disabled?: boolean;
      }
    >;
    clipRect_: SVGRectElement;
    defs_: SVGDefsElement;
    eventWrappers_: Array<[SVGElement, string, unknown]>;
    height_: number;
    horizontalLayout_: boolean;
    isVisible_: boolean;
    listeners_: Array<[SVGElement, string, unknown]>;
    parentToolbox_: Toolbox;
    permanentlyDisabled_: Array<unknown>;
    recycleBlocks_: Array<unknown>;
    recyclingEnabled_: boolean;
    reflowWrapper_: () => unknown;
    scrollTarget: null | EventTarget;
    getWorkspace: () => Workspace;
  }

  interface Coordinate {
    x: number;
    y: number;
  }
  interface Options {
    new (options: unknown): void;
    parentWorkspace: Workspace | null;
    setMetrics: unknown;
    getMetrics: unknown;
    parseZoomOptions_(options: unknown): unknown;
    parseGridOptions_(options: unknown): unknown;
    parseToolboxTree(tree: Node | string): Node;
  }
  interface Rect {
    new (x: number, y: number, w: number, h: number): void;
    height: number;
    left: number;
    top: number;
    width: number;
  }
  interface Size {
    new (width: number, height: number): void;
    width: number;
    height: number;
  }
  interface Trashcan {
    new (workspace: Workspace): void;
    workspace: Workspace;
    WIDTH_: number;
    BODY_HEIGHT_: number;
    LID_HEIGHT_: number;
    MARGIN_BOTTOM_: number;
    MARGIN_SIDE_: number;
    MARGIN_HOTSPOT_: number;
    SPRITE_LEFT_: number;
    SPRITE_TOP_: number;
    isOpen: boolean;
    svgGroup_: Element;
    svgLid_: Element;
    lidTask_: number;
    lidOpen_: number;
    left_: number;
    top_: number;
    createDom(): Element;
    init(bottom: number): number;
    dispose(): void;
    position(): void;
    getClientRect(): Rect;
    setOpen_(state: boolean): void;
    animateLid_(): void;
    close(): void;
    click(): void;
  }

  interface Field {
    new (text: string, opt_validator?: UnknownFunction | undefined): void;
    TYPE_MAP_: {
      [x: string]: {
        fromJson: UnknownFunction;
      };
    };
    register(
      type: string,
      fieldClass: {
        fromJson: UnknownFunction;
      }
    ): void;
    cacheWidths_: unknown;
    cacheReference_: number;
    name: string | undefined;
    className_: string;
    text_: string;
    sourceBlock_: Block | null;
    visible_: boolean;
    argType_: unknown[];
    validator_: UnknownFunction | null;
    NBSP: string;
    IE_TEXT_OFFSET: string;
    EDITABLE: boolean;
    SERIALIZABLE: boolean;
    setSourceBlock(block: Block): void;
    init(): void;
    initModel(): void;
    dispose(): void;
    updateEditable(): void;
    isCurrentlyEditable(): boolean;
    isVisible(): boolean;
    setVisible(visible: boolean): void;
    addArgType(argType: string): void;
    getArgTypes(): string;
    setValidator(handler: UnknownFunction): void;
    getValidator(): UnknownFunction;
    classValidator(text: string): string;
    callValidator(text: string): string | null;
    getSvgRoot(): Element;
    render_(): void;
    updateWidth(): void;
    getCachedWidth(textElement: Element): number;
    startCache(): void;
    stopCache(): void;
    getSize(): Size;
    getScaledBBox_(): {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    getDisplayText_(): string;
    getText(): string;
    setText(newText: string): void;
    forceRerender(): void;
    updateTextNode_(): void;
    getValue(): string;
    setValue(newValue: string): void;
    onMouseDown_(e: Event): void;
    setTooltip(_newTip: string | Element): void;
    getClickTarget_(): Element;
    getAbsoluteXY_(): Coordinate;
    referencesVariables(): boolean;
  }

  interface ScrollbarPair {
    new (workspace: Workspace): void;
    oldHostMetrics_: unknown;
    dispose(): void;
    resize(): void;
    set(x: number, y: number): void;
    getRatio_(handlePosition: number, viewSize: number): number;
    setContainerVisible(visible: boolean): void;
  }

  interface Scrollbar {
    new (
      workspace: Workspace,
      horizontal: boolean,
      opt_pair?: boolean | undefined,
      opt_class?: string | undefined
    ): void;
    origin_: Coordinate;
    originHasChanged_: boolean;
    scrollViewSize_: number;
    handleLength_: number;
    handlePosition_: number;
    isVisible_: boolean;
    containerVisible_: boolean;
    scrollbarThickness: number;
    metricsAreEquivalent_(first: Metrics, second: Metrics): boolean;
    dispose(): void;
    setHandleLength_(newLength: number): void;
    setHandlePosition(newPosition: number): void;
    setScrollViewSize_(newSize: number): void;
    setPosition_(x: number, y: number): void;
    resize(opt_metrics?: Metrics): void;
    resizeHorizontal_(hostMetrics: Metrics): void;
    resizeViewHorizontal(hostMetrics: Metrics): void;
    resizeContentHorizontal(hostMetrics: Metrics): void;
    resizeVertical_(hostMetrics: Metrics): void;
    resizeViewVertical(hostMetrics: Metrics): void;
    resizeContentVertical(hostMetrics: Metrics): void;
    createDom_(opt_class?: string | undefined): void;
    isVisible(): boolean;
    setContainerVisible(visible: boolean): void;
    setVisible(visible: boolean): void;
    updateDisplay_(): void;
    onMouseDownBar_(e: Event): void;
    onMouseDownHandle_(e: Event): void;
    onMouseMoveHandle_(e: Event): void;
    onMouseUpHandle_(): void;
    cleanUp_(): void;
    constrainHandle_(value: number): number;
    onScroll_(): void;
    set(value: number): void;
    setOrigin(x: number, y: number): void;
  }

  interface Gesture {
    new (e: Event, creatorWorkspace: WorkspaceSvg): void;
    dispose(): void;
    updateFromEvent_(e: Event): void;
    updateDragDelta_(currentXY: Coordinate): boolean;
    updateIsDraggingFromFlyout_(): boolean;
    updateIsDraggingBubble_(): boolean;
    updateIsDraggingBlock_(): boolean;
    updateIsDraggingWorkspace_(): void;
    updateIsDragging_(): void;
    startDraggingBlock_(): void;
    startDraggingBubble_(): void;
    doStart(e: Event): void;
    bindMouseEvents(e: Event): void;
    handleMove(e: Event): void;
    handleUp(e: Event): void;
    cancel(): void;
    handleRightClick(e: Event): void;
    handleWsStart(e: Event, ws: Workspace): void;
    handleFlyoutStart(e: Event, flyout: Flyout): void;
    handleBlockStart(e: Event, block: BlockSvg): void;
    handleBubbleStart(e: Event, bubble: Bubble): void;
    doBubbleClick_(): void;
    doFieldClick_(): void;
    doBlockClick_(): void;
    doWorkspaceClick_(): void;
    bringBlockToFront_(): void;
    setStartField(field: Field): void;
    setStartBubble(bubble: Bubble): void;
    setStartBlock(block: BlockSvg): void;
    setTargetBlock_(block: BlockSvg): void;
    setStartWorkspace_(ws: WorkspaceSvg): void;
    setStartFlyout_(flyout: Flyout): void;
    isBubbleClick_(): boolean;
    isBlockClick_(): boolean;
    isFieldClick_(): boolean;
    isWorkspaceClick_(): boolean;
    isDragging(): boolean;
    hasStarted(): boolean;
    forceStartBlockDrag(fakeEvent: unknown, block: BlockSvg): void;
    duplicateOnDrag_(): void;
  }

  interface BlockDragSurfaceSvg {
    new (container: Element): void;
    SVG_: Element | null;
    dragGroup_: Element | null;
    container: Element | null;
    scale_: number;
    surfaceXY_: Coordinate;
    dragShadowFilterId_: string;
    SHADOW_STD_DEVIATION: number;
    createDom(): void;
    createDropShadowDom_(defs: Element): string;
    setBlocksAndShow(blocks: Element): void;
    translateAndScaleGroup(x: number, y: number, scale: number): void;
    translateSurfaceInternal_(): void;
    translateSurface(x: number, y: number): void;
    getSurfaceTranslation(): Coordinate;
    getGroup(): Element;
    getCurrentBlock(): Element | undefined;
    clearAndHide(opt_newSurface?: Element | undefined): void;
  }

  interface WorkspaceDragSurfaceSvg {
    new (container: Element): void;
    SVG_: Element | null;
    dragGroup_: Element | null;
    container: Element | null;
    createDom(): void;
    translateSurface(x: number, y: number): void;
    getSurfaceTranslation(): Coordinate;
    clearAndHide(newSurface: SVGElement): void;
    setContentsAndShow(
      blockCanvas: Element,
      bubbleCanvas: Element,
      previousSibling: Element | null,
      width: number,
      height: number,
      scale: number
    ): void;
  }

  interface FlyoutButton {
    new (
      workspace: WorkspaceSvg,
      targetWorkspace: WorkspaceSvg,
      xml: Element,
      isLabel: boolean
    ): void;
    MARGIN: number;
    width: number;
    height: number;
    onMouseUpWrapper_: null | unknown;
    init(
      workspace: WorkspaceSvg,
      targetWorkspace: WorkspaceSvg,
      xml: Element,
      isLabel: boolean
    ): void;
    createDom(): Element;
    addTextSvg(isLabel: boolean): void;
    show(): void;
    updateTransform_(): void;
    moveTo(x: number, y: number): void;
    getTargetWorkspace(): WorkspaceSvg;
    getIsCategoryLabel(): boolean;
    getText(): string;
    getPosition(): Coordinate;
    dispose(): void;
    onMouseUp_(e: Event): void;
  }

  interface Grid {
    new (pattern: SVGElement, options: unknown): void;
    scale_: number;
    dispose(): void;
    shouldSnap(): boolean;
    getSpacing(): number;
    getPatternId(): string;
    update(scale: number): void;
    setLineAttributes_(
      line: SVGElement,
      width: number,
      x1: number,
      x2: number,
      y1: number,
      y2: number
    ): void;
    moveTo(x: number, y: number): void;
    createDom(rnd: string, gridOptions: unknown, defs: SVGElement): SVGElement;
  }

  interface WorkspaceAudio {
    new (parentWorkspace: WorkspaceSvg): void;
    lastSound_: Date | null;
    dispose(): void;
    load(filenames: Array<string>, name: string): void;
    preload(): void;
    play(name: string, opt_volume?: number | undefined): void;
  }

  interface VariableMap {
    new (workspace: Workspace): void;
    clear(): void;
    renameVariable(
      variable: VariableModel,
      newName: string,
      not_fire_event: boolean
    ): void;
    renameVariableById(
      id: string,
      newName: string,
      not_fire_event: boolean
    ): void;
    renameVariableAndUses_(
      variable: VariableModel,
      newName: string,
      blocks: Array<Block>,
      not_fire_event: boolean
    ): void;
    renameVariableWithConflict_(
      variable: VariableModel,
      newName: string,
      conflictVar: VariableModel,
      blocks: Array<Block>
    ): void;
    createVariable(
      name: string,
      opt_type: string | null,
      opt_id?: string | undefined,
      opt_isLocal?: boolean | undefined,
      opt_isCloud?: boolean | undefined
    ): VariableModel | null;
    deleteVariable(variable: VariableModel, not_fire_event: boolean): void;
    deleteVariableById(id: string): void;
    forceDeleteVariableById(id: string): void;
    deleteVariableInternal_(
      variable: VariableModel,
      uses: Array<Block>,
      not_fire_event: boolean
    ): void;
    getVariable(name: string, opt_type?: string | undefined): VariableModel;
    getVariableById(id: string): VariableModel | null;
    getVariablesOfType(type: string | null): Array<VariableModel>;
    getVariableTypes(): Array<string>;
    getAllVariables(): Array<VariableModel>;
    getVariableUsesById(id: string): Array<Block>;
  }

  interface Frame {
    id: string;
    RTL: boolean;
    boxed?: boolean;
    locked: boolean;
    blockDB_: Record<string, Block>;
    temporaryCoordinate?: Coordinate & { width: number; height: number };
    svgRect_: SVGRectElement;
    selected: boolean;
    getSvgRoot(): SVGGElement;
    getWidth(): number;
    getHeight(): number;
    getHeightWidth(): { height: number; width: number };
    getBoundingFrameRect(): {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    select(): void;
    unselect(): void;
    dispose(retainBlocks?: boolean): void;
  }
  interface Connection {
    type: string;
    checkType_(otherConnection: Connection): boolean;
    targetConnection?: Connection;
    disconnect(): void;
    isConnected?: () => boolean;
    connect(otherConnection: Connection): void;
  }
  interface Bubble {
    relativeLeft_: number;
    relativeTop_: number;
    height_: number;
    width_: number;
    rendered: boolean;
    bubbleGroup_: SVGGElement;
  }
  interface Comment {
    blockId: string;
    block_: Block;
    bubble_: Bubble;
  }
  class Block {
    RTL: boolean;
    category_: string;
    checkboxInFlyout_: boolean;
    boxed?: boolean;
    childBlocks_: Array<Block>;
    collapsed_: boolean;
    colourSecondary_: string;
    colourTertiary_: string;
    colour_: string;
    comment: null | Comment;
    contextMenu: boolean;
    deletable_: boolean;
    disabled: boolean;
    edgeShapeWidth_: number;
    edgeShape_: unknown;
    editable_: boolean;
    eventsInit_: boolean;
    flyoutRect_: HTMLOrSVGElement;
    frame_: Frame | null;
    height: number;
    id: string;
    intersects_?: boolean;
    getSvgRoot: () => SVGElement;
    getChildren(ordered: boolean): Array<Block>;
    getFieldValue(name: string): string | null;
    getProcCode(this: Block): string;
    unplug(opt_healStack: boolean): void;
    getHeightWidth(): { height: number; width: number };
    temporaryCoordinate?: Coordinate & { width: number; height: number };
    inputList: Array<{
      connection: null | {
        hidden_: boolean;
        type: number;
        x_: number;
        y_: number;
        targetBlock: () => null | Block;
      };
      fieldRow: Array<{
        arrowWidth_: number;
        class_?: string;
        name?: string;
        renderSep: number;
        renderWidth: number;
        size_: { width: number; height: number };
        sourceBlock_: Block;
        textElement_: HTMLElement;
        text_: string;
        getText: () => string;
      }>;
      fieldWidth: number;
      name: string;
      outlinePath: null;
      renderHeight: number;
      renderWidth: number;
      sourceBlock_: Block;
      type: number;
    }>;
    inputsInline: boolean;
    inputsInlineDefault: boolean;
    isInFlyout: boolean;
    isInMutator: boolean;
    isInsertionMarker_: boolean;
    isShadow_: boolean;
    movable_: boolean;
    nextConnection: any;
    outputConnection: unknown;
    outputShape_: unknown;
    parentBlock_: any;
    previousConnection: Connection;
    rendered: boolean;
    squareTopLeftCorner_: boolean;
    startHat_: boolean;
    svgGroup_: SVGGElement;
    svgPath_: SVGPathElement;
    tooltip: string;
    type: string;
    useDragSurface_: boolean;
    width: number;
    workspace: Workspace;
    isShadow(): boolean;
    isSelectable(): boolean;
    isInFrame(): Frame;
    getRootBlock: () => Block;
    getNextBlock: () => Block;
    getConnections_(all?: boolean): Array<Connection>;
    getOutputShape: () => unknown;
    getSurroundParent: () => null | Block;
    getRelativeToSurfaceXY: () => {
      x: number;
      y: number;
    };
    moveBy(dx: number, dy: number): void;
    dispose(healStack?: boolean, animate?: boolean): void;
  }

  class BlockSvg extends Block {
    insertionMarkerMinWidth_: number;
    height: number;
    width: number;
    dispose(a: unknown, b: unknown): void;
  }

  interface EventsAbstract {}

  class WorkspaceComment {}

  const enum VariableType {
    Scalar = "",
    List = "list",
    Broadcast = "broadcast_msg",
  }

  class VariableModel {
    workspace: Workspace;
    name: string;
    type: VariableType;
    id_: string;
    getId(): string;
    isLocal: boolean;
    isCloud: boolean;
  }

  interface VariableModelConstructor {
    new (
      workspace: Workspace,
      name: string,
      type?: VariableType,
      id?: string,
      isLocal?: boolean,
      isCloud?: boolean
    ): VariableModel;
    compareByName(var1: VariableModel, var2: VariableModel): number;
  }

  class VariableMap {
    variableMap_: Record<string, VariableModel>;
    workspace: Workspace;
    clear(): void;
    renameVariable(variable: VariableModel, newName: string): void;
    renameVariableById(id: string, newName: string): void;
    renameVariableAndUses_(
      variable: VariableModel,
      newName: string,
      uses: Block[]
    ): void;
    renameVariableWithConflict_(
      variable: VariableModel,
      newName: string,
      conflictingVariable: VariableModel,
      uses: Block[]
    ): void;
    createVariable(
      name: string,
      type?: VariableType,
      id?: string,
      isLocal?: boolean,
      isCloud?: boolean
    ): VariableModel;
    deleteVariable(variable: VariableModel): void;
    deleteVariableById(id: string): void;
    deleteVariableInternal_(variable: VariableModel, uses: Block[]): void;
    getVariable(name: string, type?: VariableType): VariableModel | null;
    getVariableById(id: string): VariableModel | null;
    getVariablesOfType(type: VariableType): VariableModel[];
    getVariableTypes(): VariableType[];
    getAllVariables(): VariableModel[];
    getVariableUsesById(id: string): Block[];
  }

  class Flyout {}

  interface WorkspaceOptions {}

  class Workspace {
    // Gandi
    addDeletionListener(
      callback: DeletionCallbackFunc
    ): DeletionCallbackFunc | undefined;
    createGlobalProcedure(mutation: HTMLElement): void;
    dispose(): void;
    fireDeletionListeners(
      block: BlockSvg,
      undoFunc?: UnknownFunction | undefined
    ): void;
    forceDeleteVariableById(id: string): void;
    getAllGlobalProcedureMutations(): unknown;
    getGlobalProcedureMutationByProccode(proccode: unknown): unknown;
    removeDeletionListener(
      callback: DeletionCallbackFunc
    ): DeletionCallbackFunc;
    paste(xmlBlock: Element): void;
    getScratchBlocks: () => any;
    getScratchBlocksBlocks: () => Record<string, { init: () => void }>;
    parseControlStopBlock: (block: unknown /* RuntimeBlocksData */) => string;

    id: string;
    options: WorkspaceOptions;
    RTL: boolean;
    horizontalLayout: boolean;
    toolboxPosition: number; // TODO
    topBlocks_: Block[];
    listeners_: Function[];
    tapListeners_: Function[];
    undoStack_: EventsAbstract[];
    redoStack_: EventsAbstract[];
    blockDB_: Record<string, Block>;
    variableMap_: VariableMap;
    getVariableMap(): VariableMap;
    potentialVariableMap_: VariableMap | null;
    getPotentialVariableMap(): VariableMap;
    createPotentialVariableMap(): void;
    // default value defined on prototype
    rendered: boolean;
    // default value defined on prototype
    isClearing: boolean;
    // default value defined on prototype
    MAX_UNDO: 1024;
    refreshToolboxSelection_(): void;
    dispose(): void;
    addTopBlock(block: Block): void;
    removeTopBlock(block: Block): void;
    getTopBlocks(): Block[];
    addTopComment(comment: WorkspaceComment): void;
    removeTopComment(comment: WorkspaceComment): void;
    getTopComments(): WorkspaceComment[];
    getAllBlocks(): Block[];
    clear(): void;
    renameVariableById(id: string, newName: string): void;
    /**
     * @see {VariableMap.createVariable}
     */
    createVariable(
      name: string,
      type?: VariableType,
      id?: string,
      isLocal?: boolean,
      isCloud?: boolean
    ): VariableModel;
    /**
     * @see {VariableMap.getVariableUsesById}
     */
    getVariableUsesById(id: string): Block[];
    /**
     * @see {VariableMap.deleteVariableById}
     */
    deleteVariableById(id: string): void;
    /**
     * @see {VariableMap.deleteVariableInternal_}
     */
    deleteVariableInternal_(variable: VariableModel, uses: Block[]): void;
    /**
     * @deprecated always returns -1
     */
    variableIndexOf(name: string): -1;
    /**
     * @see {VariableMap.getVariable}
     */
    getVariable(name: string, type?: VariableType): void;
    /**
     * @see {VariableMap.getVariableById}
     */
    getVariableById(id: string): VariableModel;
    /**
     * @see {VariableMap.getVariablesOfType}
     */
    getVariablesOfType(type: VariableType): VariableModel[];
    /**
     * @see {VariableMap.getVariableTypes}
     */
    getVariableTypes(): VariableType[];
    /**
     * @see {VariableMap.getAllVariables}
     */
    getAllVariables(): VariableModel[];
    getWidth(): number;
    newBlock(opcode: string, id?: string): Block;
    /**
     * @param redo true for redo, false for undo
     */
    undo(redo: boolean): void;
    clearUndo(): void;
    hasRedoStack(): boolean;
    hasUndoStack(): boolean;
    addChangeListener(listener: Function): void;
    removeChangeListener(listener: Function): void;
    fireChangeListener(event: EventsAbstract): void;
    getBlockById(id: string): Block | null;
    getCommentById(id: string): WorkspaceComment | null;
    getFlyout(): Flyout | null;
    allInputsFilled(shadowBlocksAreFilled?: boolean): boolean;
  }

  interface WorkspaceConstructor {
    new (options?: WorkspaceOptions): Workspace;
    SCAN_ANGLE: number;
    WorkspaceDB_: Record<string, Workspace>;
    getById(id: string): Workspace | null;
  }

  class WorkspaceSvg extends Workspace {
    new(
      options: Options,
      opt_blockDragSurface?: BlockDragSurfaceSvg | undefined,
      opt_wsDragSurface?: WorkspaceDragSurfaceSvg | undefined
    ): void;
    getMetrics(): Metrics | null;
    getTopFrames(ordered?: boolean): Array<Frame>;
    resizeHandlerWrapper_: null | Array<unknown>;
    rendered: boolean;
    isVisible_: boolean;
    id: string;
    isFlyout: boolean;
    isMutator: boolean;
    resizesEnabled_: boolean;
    toolboxRefreshEnabled_: boolean;
    scrollX: number;
    scrollY: number;
    startScrollX: number;
    startScrollY: number;
    dragDeltaXY_: Coordinate;
    scale: number;
    trashcan: Trashcan | null;
    scrollbar: ScrollbarPair | null;
    currentGesture_: Gesture | null;
    blockDragSurface_: BlockDragSurfaceSvg | null;
    workspaceDragSurface_: WorkspaceDragSurfaceSvg;
    useWorkspaceDragSurface_: boolean;
    isDragSurfaceActive_: boolean;
    injectionDiv_: Element | null;
    lastRecordedPageScroll_: Coordinate | null;
    flyoutButtonCallbacks_: {
      [x: string]: (arg0: FlyoutButton) => unknown;
    };
    toolboxCategoryCallbacks_: {
      [x: string]: (arg0: Workspace) => Array<Element>;
    };
    inverseScreenCTM_: DOMMatrix;
    inverseScreenCTMDirty_: boolean;
    getInverseScreenCTM(): SVGMatrix;
    isVisible(): boolean;
    updateInverseScreenCTM(): void;
    getSvgXY(element: Element): Coordinate;
    getOriginOffsetInPixels(): Coordinate;
    getInjectionDiv(): Element;
    setResizeHandlerWrapper(handler: Array<unknown[]>): void;
    createDom(opt_backgroundClass?: string | undefined): Element;
    dispose(): void;
    newBlock(
      prototypeName: string | null,
      opt_id?: string | undefined
    ): BlockSvg;
    addTrashcan_(bottom: number): number;
    getFlyout(): Flyout;
    getToolbox(): Toolbox;
    updateScreenCalculations_(): void;
    resizeContents(): void;
    resize(): void;
    updateScreenCalculationsIfScrolled(): void;
    getCanvas(): Element;
    getBubbleCanvas(): SVGGElement;
    getParentSvg(): Element;
    translate(x: number, y: number): void;
    resetDragSurface(): void;
    setupDragSurface(): void;
    getBlockDragSurface(): BlockDragSurfaceSvg | null;
    getWidth(): number;
    setVisible(isVisible: boolean): void;
    render(): void;
    traceOn(): void;
    highlightBlock(id: string | null, opt_state?: boolean | undefined): void;
    glowBlock(id: string | null, isGlowingBlock: boolean): void;
    glowStack(id: string | null, isGlowingStack: boolean): void;
    reportValue(id: string | null, value: string | null): void;
    paste(xmlBlock: Element): void;
    pasteBlock_(xmlBlock: Element): void;
    pasteWorkspaceComment_(xmlComment: Element): void;
    refreshToolboxSelection_(): void;
    renameVariableById(
      id: string,
      newName: string,
      dontFireEvent?: boolean
    ): void;
    deleteVariableById(id: string): void;
    forceDeleteVariableById(id: string): void;
    recordCachedAreas(): void;
    recordDeleteAreas_(): void;
    recordBlocksArea_(): void;
    isDeleteArea(e: Event): number | null;
    isInsideBlocksArea(e: Event): boolean;
    onMouseDown_(e: Event): void;
    startDrag(e: Event, xy: Coordinate): void;
    moveDrag(e: Event): Coordinate;
    isDragging(): boolean;
    isDraggable(): boolean;
    onMouseWheel_(e: Event): void;
    getBlocksBoundingBox(): unknown;
    cleanUp(): void;
    showContextMenu_(e: Event): void;
    buildDeleteList_(topBlocks: Array<BlockSvg>): Array<BlockSvg>;
    updateToolbox(tree: Node | string): void;
    markFocused(): void;
    setBrowserFocus(): void;
    zoom(x: number, y: number, amount: number): void;
    zoomCenter(type: number): void;
    zoomToFit(): void;
    scrollCenter(): void;
    centerOnBlock(id: string | null): void;
    centerOnFirstComment(offsetX: number, offsetY: number): void;
    setScale(newScale: number): void;
    scroll(x: number, y: number): void;
    updateStackGlowScale_(): void;
    getDimensionsPx_(elem: Toolbox | Flyout): unknown;
    getContentDimensions_(ws: WorkspaceSvg, svgSize: unknown): unknown;
    getContentDimensionsExact_(ws: WorkspaceSvg): unknown;
    getContentDimensionsBounded_(ws: WorkspaceSvg, svgSize: unknown): unknown;
    getTopLevelWorkspaceMetrics_(this: WorkspaceSvg): unknown;
    setTopLevelWorkspaceMetrics_(this: WorkspaceSvg, xyRatio: unknown): void;
    setResizesEnabled(enabled: boolean): void;
    setToolboxRefreshEnabled(enabled: boolean): void;
    clear(): void;
    registerButtonCallback(
      key: string,
      func: (arg0: FlyoutButton) => unknown
    ): void;
    getButtonCallback(key: string): ((arg0: FlyoutButton) => unknown) | null;
    removeButtonCallback(key: string): void;
    registerToolboxCategoryCallback(
      key: string,
      func: (arg0: Workspace) => Array<Element>
    ): void;
    getToolboxCategoryCallback(
      key: string
    ): ((arg0: Workspace) => Array<Element>) | null;
    removeToolboxCategoryCallback(key: string): void;
    getGesture(e: Event): Gesture;
    clearGesture(): void;
    cancelCurrentGesture(): void;
    startDragWithFakeEvent(fakeEvent: unknown, block: BlockSvg): void;
    getAudioManager(): WorkspaceAudio;
    getGrid(): Grid;
    getTargetCostumeData: (asset: ScratchStorage.Asset) => string; // TODO: worst practice
  }

  interface RealBlockly extends BlocklyGlobal {
    Workspace: WorkspaceConstructor;
    WorkspaceSvg: typeof WorkspaceSvg;
  }

  interface BlocklyGlobal {
    getMainWorkspace(): Workspace | null;
  }
}

declare const Blockly: ScratchBlocks.BlocklyGlobal | undefined;
