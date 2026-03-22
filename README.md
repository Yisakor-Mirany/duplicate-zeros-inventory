# Duplicate Zeros (Inventory System)

## Objective
Duplicate each occurrence of zero in an array in place.

## Approach
- Count total zeros
- Traverse array from the end
- Shift elements right and duplicate zeros

## Example
Input: [4,0,1,3,0,2,5,0]  
Output: [4,0,0,1,3,0,0,2]

## Time Complexity
O(n)

## Space Complexity
O(1)

## Test Cases

### Normal Cases
- Mixed values with zeros
- No zeros
- Single zero

### Edge Cases
- All zeros
- Empty array
- Zero at the end
