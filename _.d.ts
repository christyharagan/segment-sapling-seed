declare type LIBS = never
declare type TPS = never
/**
 * Specify which Tracking plans are linked with which libraries. Format:
 * 
 * {
 *   "Tracking Plan": ["Library 1", "Library 2"]
 * }
 */
declare function link(_: {
  [TP in TPS]?: LIBS[]
}): void

/**
 * 
 * @param prefix the prefix given to the checkedin schemas for development
 * @param schemas the list of tracking plans and libraries to checkin for development. Empty means all of them.
 */
declare function dev(prefix: string, ...schemas: (LIBS | TPS)[]): void
/**
 * 
 * @param prefix the prefix given to the checkedin schemas for testing
 * @param schemas the list of tracking plans to checkin for testing. Empty means all of them.
 */
declare function test(prefix: string, ...schemas: TPS[]): void