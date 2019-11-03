const filterEvenNumbers = (items) => items.filter(i => i % 2 === 0)

describe("filterEvenNumbers", () => { 
    it("should filter array down to only even numbers", () => {
        const numbers = filterEvenNumbers([1,2,3,4,5,6])

        expect(numbers, `Result of the filter: ${numbers}`)
            .toBeArrayOfSize(3)
            .toIncludeAllMembers([2, 4, 6])
    })
})