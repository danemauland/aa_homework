class GraphNode

    attr_accessor :value, :neighbors
    def initialize(value)
        @value = value
        @neighbors = []
    end
end

def bfs(starting_node, target_value)
    queue = [starting_node]
    seen = [starting_node]
    until queue.empty?
        node = queue.shift
        return node if node.value == target_value
        node.neighbors.each do |neighbor|
            if !seen.include?(neighbor)
                queue << neighbor
                seen << neighbor
            end
        end
    end
    nil
end