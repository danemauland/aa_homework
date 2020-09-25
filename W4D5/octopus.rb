require "set"
def sluggish_octopus(arr)
    arr.each do |fish1|
        return fish1 if arr.all? {|fish2| fish1.length >= fish2.length}
    end
end

# Merge Sort: O(n*lg(n))
def merge_sort (array, &prc)
    return array if array.length <= 1

    mid_idx = array.length / 2
    merge(
        merge_sort(array.take(mid_idx), &prc),
        merge_sort(array.drop(mid_idx), &prc),
        &prc
    )
end

# NB: In Ruby, shift is an O(1) operation. This is not true of all languages.
def merge(left, right, &prc)
    merged_array = []
    prc = Proc.new { |num1, num2| num1 <=> num2 } unless block_given?
    until left.empty? || right.empty?
        case prc.call(left.first, right.first)
        when -1
            merged_array << left.shift
        when 0
            merged_array << left.shift
        when 1
            merged_array << right.shift
        end
    end
    merged_array + left + right
end

def dominant_octopus(fish)
    sorted = merge_sort(fish) {|a, b| a.length <=> b.length}
    sorted[-1]
end

def clever_octopus(fish)
    longest_fish = ""
    fish.each {|fishie| longest_fish = fishie if fishie.length > longest_fish.length}
    longest_fish
end

# fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# p sluggish_octopus(fish) == "fiiiissshhhhhh"
# p dominant_octopus(fish) == "fiiiissshhhhhh"
# p clever_octopus(fish) == "fiiiissshhhhhh"

def slow_dance(move, tiles_array)
    tiles_array.each_with_index {|tile, i| return i if tile == move}
end

def fast_dance(move, tiles_hash)
    tiles_hash[move]
end


tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
p slow_dance("up", tiles_array) == 0
p slow_dance("right-down", tiles_array) == 3

new_tiles_data_structure = {}
tiles_array.each_with_index {|tile, i| new_tiles_data_structure[tile] = i }

p fast_dance("up", new_tiles_data_structure) == 0
p fast_dance("right-down", new_tiles_data_structure) == 3


