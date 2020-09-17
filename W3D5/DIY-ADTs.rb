class Stack
    def initialize
      @stack = []
    end

    def push(el)
      @stack << el
      el
    end

    def pop
      @stack.pop
    end

    def peek
      @stack.last
    end
end

class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
        el
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue.first
    end
end

class Map
    def initialize
        @map = []
    end

    def set(key, value)
        found = false
        @map.each {|pair| pair[1], found = value, true if pair[0] == key}
        @map << [key, value] if !found
    end

    def get(key)
        @map.each {|pair| return pair[1] if pair[0] == key}
        nil
    end

    def delete(key)
        val = get(key)
        @map.reject! {|pair| pair[0] == key}
        val
    end

    def show
        deep_dup(@map)
    end

    private
    def deep_dup(arr)
        arr.map {|el| el.is_a?(Array) ? deep_dup(el) : el}
    end
end