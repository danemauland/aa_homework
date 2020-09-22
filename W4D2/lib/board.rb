class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) {[:stone, :stone, :stone, :stone]}
    @cups[6], @cups[13] = [], []
    @name1, @name2 = name1, name2
    @opponents_cup = {@name1 => 13, @name2 => 6}

  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > 13 || start_pos < 0
    raise "Starting cup is empty" if @cups[start_pos].length == 0
  end

  def make_move(start_pos, current_player_name)
    num_marbles = @cups[start_pos].length
    @cups[start_pos] = []
    i = 1
    until num_marbles == 0
      unless (start_pos + i) % 14 == @opponents_cup[current_player_name]
        @cups[(start_pos + i) % 14] << :stone 
        num_marbles -= 1
      end
      i += 1
    end
    render
    next_turn((start_pos + i - 1) % 14)
    
  end

  def next_turn(ending_cup_idx)
    return :prompt if ending_cup_idx == 13 || ending_cup_idx == 6
    return :switch if @cups[ending_cup_idx].length == 1
    ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (0...6).all? {|i| @cups[i].length == 0} || (7...13).all? {|i| @cups[i].length == 0}
  end

  def winner
    return @name1 if @cups[6].length > @cups[13].length
    return @name2 if @cups[6].length < @cups[13].length
    :draw
  end
end
