class LRUCache
    def initialize(n)
        @size = n
        @underlying_array = []
    end

    def count
      # returns number of elements currently in cache
      underlying_array.length
    end

    def add(el)
      # adds element to cache according to LRU principle
      underlying_array.delete(el)
      underlying_array << el
      underlying_array.shift if count > size
    end

    def show
      # shows the items in the cache, with the LRU item first
    p underlying_array.dup
    end

    private
    # helper methods go here!
    attr_accessor :underlying_array
    attr_reader :size

end