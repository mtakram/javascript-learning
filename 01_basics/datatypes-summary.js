/**
 * Primitive datatypes
 * 
 * There are 7 primitive datatypes
 * string, number, bigint, undefined, null, boolean, symbol
 * 
 * stored directly in memory (stack)
 * Immutable -- Once created, they cannot be changed
 * Always copy the value
 * Always compare by value
 */


/**
 * Non-primitive (Reference)
 * Other than primitive datatypes all are non-primmitive datatypes
 * object, array, function, date, regExp, map, set
 * 
 * stored by reference in memory (heap)
 * Mutable -- contents can change
 * Always copy the reference
 * Compared by reference
 */


/**
 * Stack memory
 * 
 * All the primitive datatypes fall in stack memory
 * They stores actual value
 * They copy value 
 * Speed is fast than heap
 * Memory cleanup -- Its auto when function ends
 */



/**
 * Heap memory
 * 
 * All the non-primitive datatypes fall in heap memory
 * They stores its reference (memory address)
 * They called upon its reference
 * Speed is slower than stack
 * Memory cleanup -- Garbage collected
 * 
 */